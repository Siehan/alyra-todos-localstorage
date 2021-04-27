# Todos App - localStorage et compagnie

## document.title

Pourquoi pas s'amuser avec le titre du document dynamique ?

par exemple :

- Que devez vous faire aujourd'hui ? (si pas de todos dans la liste)
- Vous avez ... tâches à accomplir ! (dans le cas contraire)

## localStorage - tâches

Assurez vous que vos tâches soient enregistrées dans `localStorage` 💪

## Mode dark

Mettez en place _mode dark_ en option. Vous pouvez utiliser le markup suivant :

```html
<!-- bootstrap5 markup pour un switch -->
<div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="activate" />
  <label className="form-check-label" htmlFor="activate"> Mode Sombre </label>
</div>
```

## Mode - localStorage

Enregistrer la dernière préférence de l'utilisateur dans `localStorage`
