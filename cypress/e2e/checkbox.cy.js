/// <reference types="cypress"/>


import Base from "../pages/Base";
import Home from "../pages/Home";
import Women from "../pages/Women";

describe("Test związany z zaznaczaniem checkbox", () =>{
    it("Kliknięcie w zakładke women", () => {
        Base.openHomePage();
        Home.clickOnWomenTab();
        cy.url().should("include", "id_category=3&controller=category");

    })
    it("Zazanczenie checboxa w zakładce women", () => {
        Women.checkTops();
        Women.topsCheckbox.should("be.checked");
        Women.checkDresses();
        Women.checkSize();

    })
})