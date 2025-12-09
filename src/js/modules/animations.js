/**
 * Модуль для инициализации AOS (Animate On Scroll) анимаций
 * AOS загружается через CDN в index.html
 */

function animations() {
  // Проверяем наличие AOS
  if (typeof AOS === "undefined") {
    console.warn(
      "AOS библиотека не загружена. Убедись, что CDN ссылка есть в index.html"
    );
    return;
  }

  // Инициализируем AOS с параметрами
  AOS.init({
    // Длительность анимации в миллисекундах
    duration: 800,

    // Тип анимации easing
    easing: "ease-in-out-quad",

    // Выполнять анимацию только один раз
    once: false,

    // Запускать анимацию, когда элемент на 75% в viewport
    offset: 100,

    // Delay по умолчанию
    delay: 0,
  });

  // Слушаем события AOS для отладки (опционально)
  document.addEventListener("aos:in", ({ detail }) => {
    // console.log('AOS in:', detail);
  });

  document.addEventListener("aos:out", ({ detail }) => {
    // console.log('AOS out:', detail);
  });
}

export default animations;

/**
 * КАК ИСПОЛЬЗОВАТЬ AOS В HTML:
 *
 * 1. Простая анимация появления:
 *    <div data-aos="fade-up">Содержимое</div>
 *
 * 2. С задержкой:
 *    <div data-aos="fade-up" data-aos-delay="100">Содержимое</div>
 *    <div data-aos="fade-up" data-aos-delay="200">Содержимое</div>
 *
 * 3. С длительностью:
 *    <div data-aos="fade-up" data-aos-duration="1000">Содержимое</div>
 *
 * 4. Когда элемент на определённом проценте в viewport:
 *    <div data-aos="fade-up" data-aos-offset="200">Содержимое</div>
 *
 * ДОСТУПНЫЕ АНИМАЦИИ:
 * - fade, fade-up, fade-down, fade-left, fade-right
 * - flip-up, flip-down, flip-left, flip-right
 * - slide-up, slide-down, slide-left, slide-right
 * - zoom-in, zoom-in-up, zoom-in-down, zoom-in-left, zoom-in-right
 * - zoom-out, zoom-out-up, zoom-out-down, zoom-out-left, zoom-out-right
 * - bounce-in, roll-in
 *
 * ПАРАМЕТРЫ:
 * - data-aos: название анимации
 * - data-aos-duration: длительность (от 50 до 3000)
 * - data-aos-delay: задержка перед началом (от 0 до 3000)
 * - data-aos-easing: функция easing (linear, ease-in-quad, etc.)
 * - data-aos-offset: когда начинать анимацию (пиксели от низа viewport)
 * - data-aos-anchor: якорь для срабатывания
 * - data-aos-once: один раз (true) или повторно (false)
 */
