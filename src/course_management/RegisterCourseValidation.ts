
import type { FormEvent } from "react";

export function validateRegisterCourseForm(
  event: FormEvent<HTMLFormElement>
) {
  // Prevent the form from refreshing the page
  event.preventDefault();

  console.log("Course validation function is running!");

  // Get the form fields
  const form = event.currentTarget;

  const semesterYear = (
    form.querySelector("#semesterYear") as HTMLInputElement
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


  const room = (
    form.querySelector("#courseRoom") as HTMLInputElement
  ).value.trim();

  const creditHours = (
    form.querySelector("#creditHours") as HTMLInputElement
  ).value.trim();

  const instructorFirstName = (
    form.querySelector("#instructorFirstName") as HTMLInputElement
  ).value.trim();

  const instructorLastName = (
    form.querySelector("#instructorLastName") as HTMLInputElement
  ).value.trim();

  const enrollmentCap = (
    form.querySelector("#enrollmentCap") as HTMLInputElement
  ).value.trim();

  // Validation patterns
  const yearPattern = /^\d{4}$/;
  const prefixPattern = /^[A-Z]{3,4}$/;
  const courseNumberPattern = /^\d{3}$/;
  const sectionPattern = /^\d{2}$/;
  const roomPattern = /^[A-Za-z' ]+\s+\d{2,3}[A-Za-z]?$/;
  const namePattern = /^[A-Za-z '-]+$/;
  const enrollmentCapPattern = /^\d{2}$/;

  // Store errors
  const errors: string[] = [];

  // Validate year
  if (semesterYear === "") {
    errors.push("Year is required.");
  } else if (!yearPattern.test(semesterYear)) {
    errors.push("Year must consist of exactly four digits.");
  } else if (Number(semesterYear) < 2026) {
    errors.push("Year cannot be before 2026.");
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

  // Course name does not require validation

  // Validate room (optional)
  if (room !== "" && !roomPattern.test(room)) {
    errors.push(
      "Room must contain a building name followed by a 2- or 3-digit room number, optionally ending in a letter."
    );
  }

  // Validate credit hours
  if (creditHours === "") {
    errors.push("Credit Hours is required.");
  } else if (
    !/^(?:\d+(?:\.\d+)?|\.\d+)$/.test(creditHours) ||
    Number(creditHours) < 0 ||
    Number(creditHours) > 4
  ) {
    errors.push("Credit Hours must be a number between 0 and 4.");
  }

  // Validate instructor first name
  if (instructorFirstName === "") {
    errors.push("Instructor First Name is required.");
  } else if (!namePattern.test(instructorFirstName)) {
    errors.push(
      "Instructor First Name may only contain letters, spaces, hyphens, and apostrophes."
    );
  }

  // Validate instructor last name
  if (instructorLastName === "") {
    errors.push("Instructor Last Name is required.");
  } else if (!namePattern.test(instructorLastName)) {
    errors.push(
      "Instructor Last Name may only contain letters, spaces, hyphens, and apostrophes."
    );
  }

  // Validate enrollment cap
  if (enrollmentCap === "") {
    errors.push("Enrollment Cap is required.");
  } else if (!enrollmentCapPattern.test(enrollmentCap)) {
    errors.push("Enrollment Cap must contain exactly two digits.");
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
