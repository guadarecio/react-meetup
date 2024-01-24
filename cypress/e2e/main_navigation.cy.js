/// <reference types="cypress" />

context("React Meetups", () => {
  it("should show header animation on scroll, add favorite and navigate to it", () => {
    cy.visit("http://localhost:3000/#all-meetups");
    cy.scrollTo("bottom", { duration: 2000 });
    cy.scrollTo("top", { duration: 1000 });
    cy.wait(1500);
    cy.get(
      ":nth-child(1) > .Card_card__48SLx > .MeetupItem_actions__mhVrb > button"
    ).click();
    cy.visit("http://localhost:3000/#my-favorites");
    cy.get(":nth-child(3) > a").click();
  });

  it("should add new meetup and show it in the homepage", () => {
    cy.visit("http://localhost:3000/#new-meetup");
    cy.get(":nth-child(2) > a").click();
    cy.get("#title")
      .type("Stand-up meetup")
      .should("have.value", "Stand-up meetup");
    cy.get("#image")
      .type(
        "https://resulta-2.com/wp-content/uploads/innovacion-en-equipos.png"
      )
      .should(
        "have.value",
        "https://resulta-2.com/wp-content/uploads/innovacion-en-equipos.png"
      );
    cy.get("#address")
      .type("La creu Roja, 1")
      .should("have.value", "La creu Roja, 1");

    cy.get("#description")
      .type("Standup semanal y comienzo de sprint")
      .should("have.value", "Standup semanal y comienzo de sprint");

    cy.get("button").click();
    cy.get(":nth-child(1) > a").click();
    cy.scrollTo("bottom", { duration: 3000 });
  });
});
