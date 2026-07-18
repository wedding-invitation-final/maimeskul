# Весільне запрошення — GitHub Pages

Готовий односторінковий сайт для Діми та Уляни.

## 1. Що потрібно змінити

### Адреса ресторану
Відкрийте `index.html`, знайдіть:

```html
<address id="restaurantAddress">Вставте точну адресу ресторану</address>
```

Замініть текст на точну адресу.

Трохи нижче знайдіть посилання `id="restaurantMap"` та вставте правильне посилання Google Maps у `href="..."`.

### Персональне ім’я гостя
Базовий текст:

```html
<p class="script-title guest-name" id="guestGreeting">Дорогі … та …</p>
```

Його можна змінити прямо в `index.html`.

Або створювати персональні посилання без зміни коду:

```text
https://ВАШ-ЛОГІН.github.io/НАЗВА-РЕПОЗИТОРІЮ/?guest=Дорогі%20Олена%20та%20Максим
```

### Музика
Покладіть MP3-файл у папку:

```text
audio/music.mp3
```

Музика не запускається автоматично. Вона вмикається після натискання гостем на кнопку.

Використовуйте композицію, на яку маєте право.

## 2. Як опублікувати на GitHub Pages

1. Створіть новий публічний репозиторій на GitHub.
2. Розпакуйте ZIP-архів.
3. Завантажте **вміст папки** `wedding-invitation` у репозиторій:
   - `index.html`
   - `style.css`
   - `script.js`
   - папки `images` та `audio`
4. Натисніть **Commit changes**.
5. Відкрийте **Settings → Pages**.
6. У розділі **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
7. Натисніть **Save**.

Через кілька хвилин GitHub покаже адресу сайту.

## 3. Як отримувати відповіді RSVP

GitHub Pages — статичний хостинг, тому сам по собі не надсилає форму.

Найпростіший варіант — Formspree:

1. Створіть безкоштовну форму на Formspree.
2. Отримайте адресу на зразок:

```text
https://formspree.io/f/XXXXXXXX
```

3. У `index.html` змініть тег форми:

```html
<form class="rsvp-form" id="rsvpForm" method="POST"
      action="https://formspree.io/f/XXXXXXXX">
```

4. У `script.js` видаліть або закоментуйте блок, що починається з:

```js
rsvpForm.addEventListener("submit", (event) => {
```

і закінчується відповідним `});`.

Після цього відповіді гостей надходитимуть через Formspree.

## 4. Заміна фотографій

Файли лежать у папці `images`:

- `envelope.png`
- `lilies.png`
- `registry-office.png`
- `restaurant.png`
- `banquet.png`
- `couple.png`

Щоб замінити фото, завантажте нове з **точно такою самою назвою**.

Для швидкого завантаження сайту бажано:
- формат WebP або оптимізований PNG/JPG;
- ширина приблизно 1200–1800 px;
- вага одного файлу до 1–2 МБ.
