# thomasblankers.github.io

My personal website, www.thomasblankers.com. These are plain HTML files served by GitHub Pages. There's no build step: edit a file in GitHub, commit, and the site updates within a minute or two.

## Files

| File | What it is |
|---|---|
| `index.html` | Home: intro, current research, latest news, roles |
| `research.html` | Research projects and career path |
| `publications.html` | All publications, newest first |
| `people.html` | Current lab members, PhD alumni, past students |
| `outreach.html` | Media, podcasts, talks for the public |
| `cv.html` + `Thomas_Blankers_CV.pdf` | CV page and its PDF |
| `landingimage.html` | Image credits for the banner |
| `assets/site.css` | The design for every page except the CV (colours, fonts, spacing) |
| `assets/site.js` | The light/dark button |

The header, menu and footer are the same on every page. If you change one (for example a new menu item), change it in every `.html` file.

## Common edits

**Add a publication.** In `publications.html`, copy an existing block and paste it at the top of the right year:

```html
      <li>
        <span class="ttl">Title of the paper.</span>
        <span class="au">Author, A., <b>Blankers, T.</b> &amp; Author, B. 2026.</span>
        <span class="src"><i>Journal Name</i> 12: 34–56. <a href="https://doi.org/10.xxxx/yyyy">doi:10.xxxx/yyyy</a></span>
      </li>
```

For a new year, add `<h2 class="year">2027</h2>` followed by `<ol class="pubs">` … `</ol>` above the previous year. Write `&` as `&amp;`. Mark shared first authorship with ‡ and student co-authors with *. If it's one of the three newest papers, also update the "Latest" list in `index.html`.

**Add or move a person.** In `people.html`, each person is one line:

```html
  <div class="row"><div class="when">MSc student</div><div><span class="person"><b>Name</b><br><span class="muted">Project title</span></span></div></div>
```

When someone leaves, move their line to "Past students and trainees" and put the academic year (for example `2025/26`) in the `when` part.

**Add a news item or outreach activity.** Copy a `<div class="row">…</div>` line in the "Latest" section of `index.html` or in `outreach.html`.

**Update the CV.** Edit `cv.html`, then replace `Thomas_Blankers_CV.pdf`. Opening `cv.html` in a browser and printing to PDF (A4, background graphics on) gives the same layout.

Species names go in `<i>…</i>`.
