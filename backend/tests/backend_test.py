"""Backend API tests for ICELAB."""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://glowing-clarity.preview.emergentagent.com').rstrip('/')


@pytest.fixture(scope="module")
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Health endpoints
class TestHealth:
    def test_health(self, api):
        r = api.get(f"{BASE_URL}/api/health", timeout=15)
        assert r.status_code == 200
        d = r.json()
        assert d.get("status") == "ok"

    def test_root(self, api):
        r = api.get(f"{BASE_URL}/api/", timeout=15)
        assert r.status_code == 200
        d = r.json()
        assert "ICELAB" in d.get("message", "")


# Inquiries
class TestInquiries:
    def test_create_valid_inquiry(self, api):
        payload = {
            "name": "TEST_Reviewer",
            "email": "test_reviewer@example.com",
            "company": "TEST_Co",
            "inquiry_type": "Wholesale",
            "message": "TEST_inquiry_message_for_automation"
        }
        r = api.post(f"{BASE_URL}/api/inquiries", json=payload, timeout=30)
        assert r.status_code == 200, r.text
        d = r.json()
        assert d["name"] == payload["name"]
        assert d["email"] == payload["email"]
        assert d["inquiry_type"] == payload["inquiry_type"]
        assert d["message"] == payload["message"]
        assert "id" in d
        assert "_id" not in d
        assert "timestamp" in d
        assert isinstance(d.get("email_sent"), bool)
        # store flag for later assertion in summary
        TestInquiries.last_email_sent = d["email_sent"]
        TestInquiries.created_id = d["id"]

    def test_invalid_email(self, api):
        payload = {
            "name": "TEST_Bad",
            "email": "not-an-email",
            "inquiry_type": "Wholesale",
            "message": "x"
        }
        r = api.post(f"{BASE_URL}/api/inquiries", json=payload, timeout=15)
        assert r.status_code == 422

    def test_missing_required(self, api):
        payload = {"email": "ok@example.com"}
        r = api.post(f"{BASE_URL}/api/inquiries", json=payload, timeout=15)
        assert r.status_code == 422

    def test_list_inquiries(self, api):
        r = api.get(f"{BASE_URL}/api/inquiries", timeout=15)
        assert r.status_code == 200
        d = r.json()
        assert isinstance(d, list)
        # No _id leak
        for row in d:
            assert "_id" not in row
            assert "id" in row
            assert "timestamp" in row
        # Sorted desc by timestamp
        if len(d) >= 2:
            assert d[0]["timestamp"] >= d[1]["timestamp"]
