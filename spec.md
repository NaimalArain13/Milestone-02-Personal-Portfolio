# Project Redesign Specifications

## Objective
Redesign the layout and visual aesthetics of the personal portfolio website, "Milestone-02-Personal-Portfolio," while retaining the existing content. The new design should be inspired by the Dribbble shot "Carlos - Personal Portfolio Website" (https://dribbble.com/shots/10724776-Carlos-Personal-Portfolio-Website) and incorporate a greyish and white color scheme. All projects, including 15+ personal, 2 professional, and 1 startup project, must be prominently displayed.

## Design Principles
*   **Modern & Clean:** Adopt a contemporary, minimalist design approach.
*   **User-Centric:** Ensure intuitive navigation and a pleasant user experience.
*   **Responsive:** The design must be fully responsive across various devices (desktop, tablet, mobile).

## Visual Elements

### Color Scheme
*   **Primary Colors:** Predominantly greyish tones (e.g., light grey, charcoal, slate) and white.
*   **Accent Colors:** A subtle accent color (e.g., a muted blue or green) can be used sparingly for interactive elements or highlights, but the overall feel should be grey and white.
*   **Text:** Dark grey or black on light backgrounds, light grey or white on dark backgrounds for readability.

### Typography
*   **Fonts:** Modern, clean sans-serif fonts for headings and body text. (e.g., Inter, Montserrat, Open Sans).
*   **Hierarchy:** Clear typographic hierarchy for headings, subheadings, and body text.

### Layout & Structure

#### General Layout
*   **Inspiration:** The overall layout should draw inspiration from the Dribbble shot, focusing on clean sections, ample whitespace, and a clear visual flow.
*   **Navigation:** A prominent, easy-to-use navigation system (e.g., sticky header, hamburger menu on mobile).

#### Sections (as per Dribbble inspiration)
1.  **Hero Section:**
    *   Prominent display of name and role.
    *   Concise, impactful headline/tagline.
    *   Call-to-action (e.g., "View Projects," "Contact Me").
    *   Subtle background (e.g., abstract shapes, muted pattern, or a clean solid color).
2.  **About Section:**
    *   Professional photo/avatar.
    *   Brief, engaging personal summary.
    *   Key skills or expertise highlights.
3.  **Projects Section:**
    *   **Requirement:** Display all 15+ personal, 2 professional, and 1 startup project.
    *   **Layout:** A grid-based or card-based layout for projects, allowing for easy browsing.
    *   **Project Cards:** Each project card should include:
        *   Project Title
        *   Brief Description
        *   Key Technologies/Tools Used
        *   Link to Live Demo (if applicable)
        *   Link to GitHub Repository (if applicable)
        *   Thumbnail/Image (placeholder if original images are not available)
    *   **Filtering/Categorization (Optional but Recommended):** Consider adding filters for project types (personal, professional, startup) or technologies.
4.  **Experience/Skills Section:**
    *   Timeline or list format for professional experience.
    *   Visual representation of skills (e.g., skill bars, icons).
5.  **Contact Section:**
    *   Clear contact information (email, social media links).
    *   Optional: A simple contact form.
6.  **Footer:**
    *   Copyright information.
    *   Social media links.

## Technical Considerations
*   **Framework:** Continue using Next.js.
*   **Styling:** Utilize Tailwind CSS (as indicated by `tailwind.config.ts`) for styling, ensuring consistency with the new design.
*   **Component-Based:** Maintain a component-based architecture for reusability and maintainability.

## Content
*   All existing textual content from the original repository should be preserved and integrated into the new design.
*   New content will be required for the additional projects (15+ personal, 2 professional, 1 startup). Placeholder text and images will be used initially, with clear indications for where the user needs to provide actual project details.

## Deliverables
*   Updated codebase with the redesigned layout and styling.
*   `spec.md` file detailing the design changes.

## Confirmation
Please review these specifications and confirm if they align with your vision for the redesign.