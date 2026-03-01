# AcaDobre — Instalare pe Android

## Raspuns scurt: nu ai nevoie de internet dupa prima instalare

Aplicatia se instaleaza prin browser o singura data cat timp ai internet.
Dupa aceea functioneaza **complet offline**, fara niciun server, fara nimic.

---

## Ce ai nevoie

- Un telefon Android cu Chrome
- Un cont GitHub (gratuit) — **doar pentru prima instalare**

---

## Pasul 1 — Pune fisierele pe GitHub (o singura data)

1. Mergi pe **github.com** si logheaza-te (sau creeaza cont gratuit)
2. Click **"New repository"** (butonul verde sau `+` din dreapta-sus)
3. Denumeste-l `acadobre`
4. Bifeaza **"Public"**
5. Click **"Create repository"**
6. Pe pagina noului repository, click **"uploading an existing file"**
7. Incarca **toate fisierele** din folderul `acadobrev3_6` — le poti trage cu drag-and-drop:
   - `index.html`, `style.css`, `script.js`, `manifest.json`, `sw.js`, `INSTRUCTIONS.md`
   - Folderul `questions/` (cu toate `.js` si imaginile)
   - Folderul `icons/`
8. Scrie un mesaj la "Commit changes" (orice, ex: "prima versiune") si apasa **Commit**

### Activeaza GitHub Pages

9. In repository, mergi la **Settings** (tab-ul din dreapta sus)
10. In meniul din stanga, apasa **Pages**
11. La sectiunea "Branch" alege **main** si apasa **Save**
12. Asteapta 1-2 minute. Apare un mesaj cu linkul tau:
    ```
    https://numeletau.github.io/acadobre
    ```

---

## Pasul 2 — Instaleaza pe telefon (o singura data)

1. Deschide **Chrome** pe Android
2. Mergi la linkul tau `https://numeletau.github.io/acadobre`
3. Asteapta sa se incarce complet (prima data poate dura 30 secunde)
4. Apasa **meniul ⋮** (trei puncte, dreapta-sus)
5. Apasa **"Adauga pe ecranul principal"** sau **"Instaleaza aplicatia"**
6. Confirma

Aplicatia apare pe ecranul principal ca o icona. De acum:
- **Nu mai ai nevoie de internet**
- **Nu mai ai nevoie de GitHub**
- Functioneaza complet offline

---

## Cum adaugi intrebari noi (fara sa editezi fisiere)

Apasa **"Intrebari Personalizate"** din ecranul principal al aplicatiei.

Poti crea:
- **Topicuri noi** cu orice nume
- **Intrebari** de tip: alegere simpla, alegere multipla, raspuns liber, potrivire
- **Sterge** orice intrebare sau topic

Tot ce salvezi ramane pe telefon, offline, permanent.

---

## Cum adaugi un fisier de intrebari nou (tip avansat, cu imagini)

Cand vrei sa adaugi un topic nou din fisier `.js`:

1. Mergi pe `github.com` la repository-ul tau
2. Trage fisierele noi pe pagina (drag-and-drop)
3. In `index.html` adauga: `<script src="questions/noul_fisier.js"></script>`
4. In `sw.js` adauga calea la `CACHE_FILES` si schimba `'acadobre-v1'` in `'acadobre-v2'`
5. Commit changes
6. Deschide aplicatia pe telefon **cu internet o singura data** — se actualizeaza automat

---

## Probleme frecvente

**Nu apare "Instaleaza aplicatia" in Chrome**
Asigura-te ca: esti pe `https://` (nu `http://`), folosesti Chrome (nu Samsung Internet),
si ca ai asteptat cateva secunde dupa ce s-a incarcat pagina.

**Aplicatia arata continut vechi dupa un update**
In Chrome → Setari → Confidentialitate → Sterge date de navigare → Cache.
Apoi redeschide aplicatia cu internet.
