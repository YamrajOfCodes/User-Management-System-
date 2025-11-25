User Management System – Frontend Dashboard

This project is a frontend dashboard for managing users. The focus wasn’t just to make it work but to structure it in a way that can scale without headaches later. Everything from state management to form handling was set up with long-term maintainability in mind.

Setup Instructions
Requirements

Node.js 16+

npm or yarn

Installation
git clone <your-repo-url>
cd your-project-folder
npm install

Development
npm run dev

Production Build
npm run build

Approach
State Management

I used Redux Toolkit as the main state layer. It keeps things organized and avoids the usual Redux boilerplate.
The store is split into feature-based slices using both:

Standard reducers for simple updates

Extra reducers for async logic (API requests, CRUD operations)

This structure makes it easy to add new dashboard modules without reworking everything.

Forms and Validation

For forms, I went with Formik because it keeps input handling and submissions clean.
On top of that, Zod handles validation. It gives me consistent, reusable schemas and better control over form errors.

Error + Loading States

Every async action has proper loading and error states so the UI always reflects what's actually happening. No silent failures or confusing behavior.

Scalability

The whole project is laid out with growth in mind. New features can be added without ripping apart the existing structure, and state, components, and utils are separated clearly enough to stay maintainable as the app expands.

Challenges & What I Learned
Theme System with Context API

I’m used to working with Redux, but I haven’t had much practical experience using the Context API.
For this project, I used Context specifically for the theme system (dark mode), because stuffing UI theme state into Redux didn't make sense.

At first it was a bit awkward because I’m not as familiar with Context, but building the theme toggling system forced me to actually understand how it works. By the end, it felt a lot more natural, and the theme feature ended up being cleaner than it would’ve been in Redux.

Structuring Redux for Growth

Redux slices can get messy fast if you're not careful. I had to rethink the folder structure a couple of times to avoid a future disaster.
The final setup is feature-based, predictable, and much easier to extend.

Consistent Validation

I originally handled validation differently across forms, which was a mistake. Moving everything to Zod fixed that and made the form logic way more consistent.
