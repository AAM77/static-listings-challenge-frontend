# Author: Mohammad Adeel
# Date Start: Saturday, October 31, 2020
# Time Start: 10:19 AM


## THE LAYOUT
- TWO (2) BREAKPOINTS:
  - 1. Desktop -- @ 1440px
  - 2. Mobile -- @ 375px
  - Similar component hierarchy


- COMPONENT OVERVIEW:
  - App.js (Main Container/Parent) -- {{ w/ state/class component }}
    - (Layout)
      - Banner.js

    - (Job Postings)
      - Filter.js (form) -- {{ w/ state/class component }}
      - JobCard.js (parent) -- {{ maybe w/state -- start off as a class component }}
        - JobInfoSection.js (child) -- {{ stateless/functional }}
        - JobCategorySection.js (child) -- {{ stateless/functional }}

- [] One major container component that holds the other components for easy resizing and breakpoint management.
  - [] Background color: Light Grayish Cyan (Background): hsl(180, 52%, 96%).
  
  - [] A banner component with a background & .svg img.
    - [] Fill in the banner component's background with a darker cyan (Very Dark Grayish Cyan: hsl(180, 14%, 20%)).
    - [] Add the background image (bg-header-desktop)

  - [] Loop through jobs and add a job card component for each.
    - 
    - [] Use two components for each job card to add two sections the desired info.
      - [] for Desktop, side-by-side?
      - [] for Mobile, top-and-bottom with a divider?

      - [] (left or top) JobInfoSection holds the company's logo image (circular)
      - [] (right or bottom) JobCategorySection hold details for each of the categories.
        - [] Each of these categories might need to be a mini component as well.
  - 