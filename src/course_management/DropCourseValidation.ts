
import type { FormEvent } from "react";

// Drop Course Form Validation
export function validateDropForm(
  event: FormEvent<HTMLFormElement>
): void {
  event.preventDefault();

  // Get the submitted form
  const form = event.currentTarget;

  // Function to retrieve field values
  const getValue = (id: string): string => {
    return (
      form.querySelector<HTMLInputElement>(`#${id}`)?.value.trim() ?? ""
    );
  };

  // Student Information
  const studentFirstName = getValue("studentFirstName");
  const studentLastName = getValue("studentLastName");

  // Course Information
  const courseYear = getValue("courseYear");
  const coursePrefix = getValue("coursePrefix");
  const courseNumber = getValue("courseNumber");
  const courseSection = getValue("courseSection");

  // Store validation errors
  const errors: string[] = [];

  // Regular Expression Patterns
  const namePattern = /^[A-Za-z '-]+$/;
  const yearPattern = /^\d{4}$/;
  const prefixPattern = /^[A-Z]{3,4}$/;
  const numberPattern = /^\d{3}$/;
  const sectionPattern = /^\d{2}$/;

  // Validate Student First Name
  if (studentFirstName === "") {
    errors.push("Student First Name is required.");
  } else if (!namePattern.test(studentFirstName)) {
    errors.push(
      "Student First Name must contain only letters, spaces, hyphens, and apostrophes."
    );
  }

  // Validate Student Last Name
  if (studentLastName === "") {
    errors.push("Student Last Name is required.");
  } else if (!namePattern.test(studentLastName)) {
    errors.push(
      "Student Last Name must contain only letters, spaces, hyphens, and apostrophes."
    );
  }

  // Validate Course Year
  if (courseYear === "") {
    errors.push("Course Year is required.");
  } else if (!yearPattern.test(courseYear)) {
    errors.push("Course Year must contain exactly 4 digits.");
  } else if (Number(courseYear) < 2026) {
    errors.push("Course Year must be 2026 or later.");
  }

  // Validate Course Prefix
  if (coursePrefix === "") {
    errors.push("Course Prefix is required.");
  } else if (!prefixPattern.test(coursePrefix)) {
    errors.push(
      "Course Prefix must contain 3 or 4 uppercase letters."
    );
  }

  // Validate Course Number
  if (courseNumber === "") {
    errors.push("Course Number is required.");
  } else if (!numberPattern.test(courseNumber)) {
    errors.push("Course Number must contain exactly 3 digits.");
  } else if (
    Number(courseNumber) < 100 ||
    Number(courseNumber) > 499
  ) {
    errors.push(
      "Course Number must be between 100 and 499."
    );
  }

  // Validate Course Section
  if (courseSection === "") {
    errors.push("Course Section is required.");
  } else if (!sectionPattern.test(courseSection)) {
    errors.push(
      "Course Section must contain exactly 2 digits."
    );
  }

  // Display All Validation Errors
  if (errors.length > 0) {
    alert(
      "Please correct the following errors:\n\n" +
      errors.join("\n")
    );
    return;
  }

  // Successful Validation
  alert("Drop Course information is valid!");
}
