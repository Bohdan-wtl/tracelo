import datetime
from random import randint
from playwright.sync_api import Page, sync_playwright
from faker import Faker
import allure
import pytest
from tests.resources.links import links
from tests.resources.cards import cards

@pytest.fixture(scope="function")
def session(request):
    with sync_playwright() as p:
        browser = p.chromium.launch()
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

# @pytest.mark.parametrize("link", links)
# @pytest.mark.parametrize("card", cards.values())
def test_stipe_payment(page: Page):
    fake = Faker()
    random_number = randint(1, 999999999999)
    fake_email = f"wtl-automation{random_number}@test.com"
    page.goto("https://stage.tracelo.com/en?c=aed")
    now = datetime.datetime.now()
    page.locator("input[id='phone_input']").fill("800917-7013")
    page.locator("button[type='submit']").click()
    page.locator("//input[@id='input']").fill(fake_email)
    page.get_by_role("button", name="Continue", exact=True).click()
    content_frame = page.frame_locator("iframe[name*='__privateStripeFrame']").first
    # content_frame.get_by_placeholder("1234 1234 1234 1234").fill(card["number"])
    # content_frame.get_by_placeholder("MM / YY").fill(card["exp_date"])
    # content_frame.get_by_placeholder("CVC").fill(card["cvc"])
    content_frame.get_by_placeholder("1234 1234 1234 1234").fill("4242424242424242")
    content_frame.get_by_placeholder("MM / YY").fill("11/30")
    content_frame.get_by_placeholder("CVC").fill("111")
    page.get_by_role("button", name="Submit").click()
    # page.locator("//input[@name='first_name']").wait_for(state="visible")
    # page.locator("//input[@name='first_name']").fill(fake.first_name())
    # page.locator("//input[@name='last_name']").fill(fake.last_name())
    # page.locator("//input[@name='address']").fill(fake.address())
    # page.locator("//input[@name='city']").fill(fake.city())
    # page.locator("//input[@name='zipcode']").fill(fake.zipcode())
    # page.locator("//button[text()='Save']").click()
    # page.locator("//button[@aria-label='Close']").wait_for(state="visible")
    # page.locator("//button[@aria-label='Close']").click()
    # page.locator("//div[@class='hum-burger-menu']").wait_for(state="visible")
    # page.locator("//div[@class='hum-burger-menu']").click()
    # page.locator("//span[text()='Logout']").click()

    # log_file_path = "transaction_logs.txt"
    # with open(log_file_path, "a") as log_file:
    #     log_file.write(f"Transaction passed for {link} and {card} - please check the transaction in Stripe - email {fake_email}\n")
    #     log_file.write(f"Transaction time: {now}\n")
    #
    # allure.attach.file(log_file_path, name="Transaction Log", attachment_type=allure.attachment_type.TEXT)

