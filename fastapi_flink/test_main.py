from fastapi.testclient import TestClient

from project import app

client = TestClient(app)


def test_allenterprises_resource():
    response_auth = client.get("/api/v1/enterprises/")
    assert response_auth.status_code == 200

def test_uuidenterprises_resource():
    response_auth = client.get("/api/v1/enterprises/9c4af894-7e20-42b8-8fd7-6466dda94a3e")
    assert response_auth.status_code == 200

def test_allsymbols_resource():
    response_auth = client.get("/api/v1/grapics/symbols")
    assert response_auth.status_code == 200

def test_graphic_resource():
    response_auth = client.get("/api/v1/grapics/AAPL")
    assert response_auth.status_code == 200