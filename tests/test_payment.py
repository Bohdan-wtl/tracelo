import time
from random import randint
from playwright.sync_api import Page, sync_playwright
from faker import Faker
import pytest
from tests.resources.links import links
from tests.resources.cards import cards

@pytest.fixture(scope="function")
def browser(request):
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=False)
        yield browser
        browser.close()

@pytest.fixture(scope="function")
def context(request, browser):
    context = browser.new_context()
    yield context
    context.close()

@pytest.fixture(scope="function")
def page(context, request):
    page = context.new_page()
    yield page
    page.close()

@pytest.mark.parametrize("link", links)
@pytest.mark.parametrize("card", cards.values())
def test_stipe_payment(page: Page, link, card):
    fake = Faker()
    random_number = randint(1, 999999999999)
    fake_email = f"wtl-automation{random_number}@test.com"
    page.goto(link)
    page.locator("input[id='phone_input']").fill("631727538")
    page.locator("button[type='submit']").click()
    page.get_by_placeholder("hello@mail.com").fill(fake_email)
    page.get_by_role("button", name="Continue", exact=True).click()
    content_frame = page.frame_locator("iframe[name*='__privateStripeFrame']").first
    content_frame.get_by_placeholder("1234 1234 1234 1234").fill(card["number"])
    content_frame.get_by_placeholder("MM / YY").fill(card["exp_date"])
    content_frame.get_by_placeholder("CVC").fill(card["cvc"])
    page.get_by_role("button", name="Submit").click()
    transaction_time= f"{int(time.time())}"
    page.get_by_placeholder("First Name").fill(fake.first_name())
    page.get_by_placeholder("Last Name").fill(fake.last_name())
    page.get_by_placeholder("Main Street").fill(fake.street())
    page.get_by_placeholder("Barcelona").fill(fake.city())
    page.get_by_placeholder("0123").fill(fake.zipcode())
    page.get_by_role("button", name="Save").click()
    page.get_by_role("button", name="Close").click()
    page.locator("svg").first.click()
    page.get_by_role("link", name="Logout").click()
    print(f"Transaction passed for {link} and {card} - please check the transaction in Stripe - email {fake_email}")
    print(f"Transaction time: {transaction_time}")



#test-deliquent01@test.com
# password :12
# test-deliquent02@test.com
# password :12