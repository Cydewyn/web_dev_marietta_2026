
import type { FormEvent } from "react";

export function validateCourseForm(
  event: FormEvent<HTMLFormElement>
): void {
  event.preventDefault();

  const form = event.currentTarget;

  // Retrieve form values
  const getValue = (id: string): string => {
    return (
      form.querySelector<HTMLInputElement>(`#${id}`)?.value.trim() ?? ""
    );
  };

  const courseYear = getValue("courseYear");
  const coursePrefix = getValue("coursePrefix");
  const courseNumber = getValue("courseNumber");
  const courseSection = getValue("courseSection");
  const room = getValue("room");
  const creditHours = getValue("creditHours");
  const instructorFirstName = getValue("instructorFirstName");
  const instructorLastName = getValue("instructorLastName");
  const enrollmentCap = getValue("enrollmentCap");

  // Regular expression patterns
  const yearPattern = /^\d{4}$/;
  const prefixPattern = /^[A-Z]{3,4}$/;
  const numberPattern = /^\d{3}$/;
  const sectionPattern = /^\d{2}$/;
  const roomPattern = /^[A-Za-z' ]+\s+\d{2,3}[A-Za-z]?$/;
  const namePattern = /^[A-Za-z '-]+$/;
  const creditPattern = /^\d+(\.\d+)?$/;
  const enrollmentPattern = /^\d{2}$/;

  const errors: string[] = [];

  // Course Year
  if (courseYear === "") {
    errors.push("Course Year is required.");
  } else if (!yearPattern.test(courseYear)) {
    errors.push("Course Year must contain exactly 4 digits.");
  } else if (Number(courseYear) < 2026) {
    errors.push("Course Year cannot be before 2026.");
  }

  // Course Prefix
  if (coursePrefix === "") {
    errors.push("Course Prefix is required.");
  } else if (!prefixPattern.test(coursePrefix)) {
    errors.push("Course Prefix must contain 3 or 4 capital letters.");
  }

  // Course Number
  if (courseNumber === "") {
    errors.push("Course Number is required.");
  } else if (!numberPattern.test(courseNumber)) {
    errors.push("Course Number must contain exactly 3 digits.");
  } else if (
    Number(courseNumber) < 100 ||
    Number(courseNumber) > 499
  ) {
    errors.push("Course Number must be between 100 and 499.");
  }

  // Course Section
  if (courseSection === "") {
    errors.push("Course Section is required.");
  } else if (!sectionPattern.test(courseSection)) {
    errors.push("Course Section must contain exactly 2 digits.");
  }

  // Room (optional)
  if (room !== "" && !roomPattern.test(room)) {
    errors.push(
      "Room must contain a building name followed by a 2 or 3 digit room number and an optional letter."
    );
  }

  // Credit Hours
  if (creditHours === "") {
    errors.push("Credit Hours is required.");
  } else if (
    !creditPattern.test(creditHours) ||
    Number(creditHours) < 0 ||
    Number(creditHours) > 4
  ) {
    errors.push("Credit Hours must be a number between 0 and 4.");
  }

  // Instructor First Name
  if (instructorFirstName === "") {
    errors.push("Instructor First Name is required.");
  } else if (!namePattern.test(instructorFirstName)) {
    errors.push(
      "Instructor First Name can only contain letters, spaces, hyphens, and apostrophes."
    );
  }

  // Instructor Last Name
  if (instructorLastName === "") {
    errors.push("Instructor Last Name is required.");
  } else if (!namePattern.test(instructorLastName)) {
    errors.push(
      "Instructor Last Name can only contain letters, spaces, hyphens, and apostrophes."
    );
  }

  // Enrollment Cap
  if (enrollmentCap === "") {
    errors.push("Enrollment Cap is required.");
  } else if (!enrollmentPattern.test(enrollmentCap)) {
    errors.push("Enrollment Cap must contain exactly 2 digits.");
  }

  if (parseInt(courseSection) < 0) {
    errors.push("Enrollment Cap cannot be less than 0.");
  }

  if (parseInt(enrollmentCap) < 1) {
    errors.push("Enrollment Cap cannot be less than 1.");
  }

  // Display validation results
  if (errors.length > 0) {
    alert(
      "Please correct the following errors:\n\n" +
      errors.join("\n")
    );
    return;
  }

  alert("Course information is valid!");
}
