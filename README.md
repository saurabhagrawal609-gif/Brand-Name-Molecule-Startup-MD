# Molecule → Brand Finder (static site)

This is a no-backend website that lets you click a **molecule** to reveal its **brand names**, with filters by clinical specialty and search.

## Files
- `index.html` — Markup for the app
- `styles.css` — Minimal styling
- `data.js` — Your data in a simple JSON array (`MOLECULES`)
- `app.js` — Vanilla JS logic (search, filter, show/hide brands)

Open `index.html` in a browser or host the folder on GitHub Pages/Netlify/Vercel.

## How to add more data
Open `data.js` and append new objects to the `MOLECULES` array:

```js
{
  molecule: "Molecule name and strength",
  category: "Cardiac", // or "Diabetes / Endocrine", "Neuro / Psych", "Gastro", etc.
  brands: [
    { name: "Brand A", price: 123.45 },
    { name: "Brand B" } // price is optional
  ]
}
```

> Tip: keep categories consistent so the Specialty filter stays clean.

## Optional: semi-automatic PDF → JSON (advanced)
If you want to auto-extract, you can use Python with `pdfplumber` to read text and match rows. Because PDFs vary a lot, you will still need to review the results.

Example starter (run locally):
```python
import re, json, pdfplumber

path = "New Molecule  brand name.pdf"
rows = []
with pdfplumber.open(path) as pdf:
    for page in pdf.pages:
        text = page.extract_text() or ""
        # Very naive split by newline; adjust per your PDF's layout
        for block in text.split("\n"):
            # Look for patterns like "Molecule ... Brand"
            # Then push into `rows`. Build your own rules per page layout.
            pass

# Write out to data.js format once you've built `rows`
# print(json.dumps(rows, indent=2))
```

After you generate JSON, paste into `data.js` (following the schema above).

## License
Use, modify, and share freely.
