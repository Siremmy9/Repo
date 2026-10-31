# Texcel Schools: Website Template

A premium, responsive school website built with plain HTML5, CSS3 and vanilla JavaScript (no frameworks, no backend).

## Folder structure

```
index.html about.html schools.html academics.html admissions.html fees.html
facilities.html gallery.html news.html contact.html
admin/   login, dashboard, admissions, students, messages, activities
css/     style.css  responsive.css  admin.css
js/      config.js  content.js  storage.js  main.js  admissions.js  fees.js  gallery.js  admin.js
assets/  images/(staff, gallery, news, facilities)  videos/  icons/  logo/
```

**Important:** the login is DEMO ONLY and not secure (see the comment at the top of `js/admin.js`). Admissions and messages are saved in the browser where they were submitted, so a parent's enquiry will not appear in your admin on another device until a backend (e.g. Supabase or PHP + MySQL) is connected. Until then, the WhatsApp buttons are the reliable way for parents to reach you.

## Notes

- Sample statistics, staff names, news text, hours and age ranges are placeholders: replace them.
- Respects `prefers-reduced-motion`.
