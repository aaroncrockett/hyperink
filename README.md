# HyperInkStudio

HyperInkStudio is a monorepo for a tattoo-industry application built from the experience of running my own tattoo business.

Prior to HyperInk, I ran my own tattoo business full-time, where I built and ran my own website to book flash. I created a similar site for an artist client who hired me for his site.

I took these ideas and advanced them steps further. The project is currently being developed as an MVP.

## Features

The platform brings together the tools needed to manage a tattoo business, including:

- Booking: Manage tattoo requests for: custom or flash requests.
- Flash: Clients can view and purchase flash uploaded by the artist.
- Payments: Support credit card purchases via Stripe, and payment options such as Venmo and Cash App.
- Client records: Maintain client histories, including sessions, materials used, notes, and other relevant information.
- Artist Page: Artists will have a web hub with a few pages, such as flash, checkout, and an about page.
- Custom Sites: My own tattoo website is built on top of this system. Potentially, this could lead to other artists opting to have a more custom experience built on-top of the platform.
- The project maintains a separation of concerns, with consideration given to porting it to a native mobile app and other changes that may arise.

## Tech Stack

- NextJs
- Supabase
- Tailwind
- Skeleton UI
- Motion
- Vitest

## Project Development

I am the sole developer for HyperInk.

This project has git hub Issues and a git workflow which I don't follow religiously. But is intenteded to establish structure as the project grows.

Notes (sort of a pre-docs) contain docs for the git workflow

This is a re-develop of an earlier version.

### Project Growth

I intend to develop HyperInk as an MVP, but unsure of where it will go from there. Very likely it will remain a side project. However, there is another companmy that is doing something similar. They have employees and a marketing budget.

The similarity to my project is by accident. I largely developed Hyperink from my own personal experienece. Though I will borrow ideas, post-MVP, if I find them fair to use and useful.

I found this project worth-while because, as a tattoo artist, I had the unique ability to develop my own custom experience that sets me apart from the competition.

In addition, In addition for some time I have desired to create my own application, from the ground-up and through deployment. And to maintain active users. I will have at least two to start. And that's a start.

## AI/LLM transparency

My customer base will largely be anti-AI, and that is an intentional consideration in how I design and develop this product. I myself have a mixed and nuanced view on the subject.

Here are some AI guidelines and transparency for this project:

### For customers

- AI wont be used for customer service. Period.
- AI wont be used replace any potential humans. Period.
- AI is never used to make any art I do. Or any art used within the project. Period.
- AI wont be a feature available to HyperInk customers.

### In Development

- AI is used lightly and manually by copying and pasting (and reviewing for accuracy) from LLM's. No LLM/AI has access to my project, or is used inside of my code editor.
- In general, I still hand-code a lot. Because I find it helps me to understand the application better, and in the end, actually saves time. But as a tool, I am not opposed to intelligent use of the technology as it pertains to application engineering.

Limited LLM use, for the following:

- Aide in tasks like debugging and catching/fixing sytax mistakes.
- As a brainstorming tool.
- Aide in summarizing docs or code bases.
- Aide in writing some small and localized pieces of code, reviewed and edited by myself. I still hand-code the majority of my code.
- Aide in some technical writing. Always edited and reviewed by myself.
- For placeholder text and data.
