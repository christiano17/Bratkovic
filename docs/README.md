# Avtomehanične storitve Bratkovič

Clean, simple landing page inspired by pasjisalonmarli.si

## Struktur

```
bratkovic-simple/
├── index.html    # Hauptseite
├── style.css     # Alle Styles
├── script.js     # Navigation & Scroll-Effekte
└── README.md     # Diese Datei
```

## Installation

### GitHub Pages Deploy

1. **Dateien ins Repository kopieren:**
   ```bash
   # Kopiere alle Dateien in den docs/ Ordner deines Repos
   cp bratkovic-simple/* Bratkovic/docs/
   ```

2. **Commit & Push:**
   ```bash
   cd Bratkovic
   git add .
   git commit -m "Update: Clean redesign inspired by pasjisalonmarli.si"
   git push
   ```

3. **GitHub Pages Einstellungen:**
   - Gehe zu: Repository → Settings → Pages
   - Source: Deploy from a branch
   - Branch: main → /docs
   - Save

Die Website ist dann verfügbar unter: `https://christiano17.github.io/Bratkovic/`

## Anpassungen

### Kontaktdaten ändern
In `index.html`, Section `#kontakt`:
- Adresse
- Telefon
- E-Mail
- Öffnungszeiten

### Farben ändern
In `style.css`, unter `:root`:
```css
--primary: #2563eb;        /* Haupt-Blau */
--primary-dark: #1e40af;   /* Dunkleres Blau */
--dark: #1f2937;           /* Text-Farbe */
```

### Hero-Gradient ändern
In `style.css`, `.hero`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## Features

✅ Responsive Design (Mobile & Desktop)  
✅ Smooth Scroll Navigation  
✅ Hover-Effekte auf Cards  
✅ Animierte Service-Cards  
✅ Clean & Modern Layout  
✅ Keine Build-Tools nötig  
✅ Kein React/Framework overhead  

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)
