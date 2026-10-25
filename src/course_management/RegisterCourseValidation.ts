
import type { FormEvent } from "react";

// Repeat of other form - IGNORE

export function validateRegisterCourseForm(
  event: FormEvent<HTMLFormElement>
) {
  // Prevent the form from refreshing the page
  event.preventDefault();

  console.log("Course validation function is running!");

  // Get the form fields
  const form = event.currentTarget;

  const firstName = (
    form.querySelector("#studentFirstName") as HTMLInputElement
  ).value.trim();

  const lastName = (
    form.querySelector("#studentLastName") as HTMLInputElement
  ).value.trim();

  const coursePrefix = (
    form.querySelector("#coursePrefix") as HTMLInputElement
  ).value.trim();

  const courseNumber = (
    form.querySelector("#courseNumber") as HTMLInputElement
  ).value.trim();

  const courseSection = (
    form.querySelector("#courseSection") as HTMLInputElement
  ).value.trim();

  // Validation patterns
  const namePattern = /^[A-Za-z '-]+$/;
  const prefixPattern = /^[A-Z]{3,4}$/;
  const courseNumberPattern = /^\d{3}$/;
  const sectionPattern = /^\d{2}$/;
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


  // Validate course prefix
  if (coursePrefix === "") {
    errors.push("Course Prefix is required.");
  } else if (!prefixPattern.test(coursePrefix)) {
    errors.push(
      "Course Prefix must contain 3 or 4 capital letters (e.g., ART or CSCI)."
    );
  }

  // Validate course number
  if (courseNumber === "") {
    errors.push("Course Number is required.");
  } else if (!courseNumberPattern.test(courseNumber)) {
    errors.push("Course Number must contain exactly three digits.");
  } else if (
    Number(courseNumber) < 100 ||
    Number(courseNumber) > 499
  ) {
    errors.push("Course Number must be between 100 and 499.");
  }

  // Validate course section
  if (courseSection === "") {
    errors.push("Course Section is required.");
  } else if (!sectionPattern.test(courseSection)) {
    errors.push("Course Section must contain exactly two digits (e.g., 01).");
  }

  // Show errors or success
  if (errors.length > 0) {
    alert(
      "Please correct the following errors:\n\n" +
        errors.join("\n")
    );
    return;
  }

  alert("Course information passed validation!");
}
