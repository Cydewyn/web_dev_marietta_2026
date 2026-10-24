import type { FormEvent } from "react";

export function validateStudentForm(
  event: FormEvent<HTMLFormElement>
) {
  // Prevent the form from refreshing the page
  event.preventDefault();

  console.log("Validation function is running!");

  // Get the form fields
  const form = event.currentTarget;

  const firstName = (
    form.querySelector("#studentFirstName") as HTMLInputElement
  ).value.trim();

  const lastName = (
    form.querySelector("#studentLastName") as HTMLInputElement
  ).value.trim();

  const studentMajor = (
    form.querySelector("#studentMajor") as HTMLInputElement
  ).value.trim();

  const studentEmail = (
    form.querySelector("#studentEmail") as HTMLInputElement
  ).value.trim();

  // Names and major may contain letters, spaces,
  // hyphens, and apostrophes
  const namePattern = /^[A-Za-z '-]+$/;

  // Email must have 2-3 letters, 3 digits, and
  // the Marietta College email domain
  const emailPattern = /^[A-Za-z]{2,3}[0-9]{3}@marietta\.edu$/;

  // Store errors
  const errors: string[] = [];

  // Validate first name
  if (firstName === "") {
    errors.push("Student's First Name is required.");
  } else if (!namePattern.test(firstName)) {
    errors.push(
      "Student's First Name may only contain letters, spaces, hyphens, and apostrophes."
    );
  }

  // Validate last name
  if (lastName === "") {
    errors.push("Student's Last Name is required.");
  } else if (!namePattern.test(lastName)) {
    errors.push(
      "Student's Last Name may only contain letters, spaces, hyphens, and apostrophes."
    );
  }

  // Validate major (optional)
  if (
    studentMajor !== "" &&
    !namePattern.test(studentMajor)
  ) {
    errors.push(
      "Student's Major may only contain letters, spaces, hyphens, and apostrophes."
    );
  }

  // Validate email
  if (studentEmail === "") {
    errors.push("Student's Email Address is required.");
  } else if (!emailPattern.test(studentEmail)) {
    errors.push(
      "Email must follow the format ab123@marietta.edu or abc123@marietta.edu."
    );
  }

  // Show errors or success
  if (errors.length > 0) {
    alert(
      "Please correct the following errors:\n\n" +
        errors.join("\n")
    );
    return;
  }

  alert("Student information passed validation!");
}