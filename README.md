# Тестовое задание

Мы ищем человека с большой долей самостоятельности, который уже знает или сможет самостоятельно изучить основы языка и используемых технологий, используя документацию и доступную в сети информацию.
Тестовое задание является сильно упрощенной версией того, с чем мы работаем.

На бэкенде у нас [moleculer.js](https://moleculer.services/), на фронте используется [svelte](https://ru.svelte.dev/)

В репозитории есть заготовка нескольких сервисов на молекулере:

- [gateway](https://moleculer.services/docs/0.14/moleculer-web.html#content-inner) - принимает все запросы и маршрутизирует их по нужным сервисам.
- randomizer - сервис с одним единственным методом. В задании он нужен для того, чтобы продемонстрировать как одни сервисы взаимодействуют с другими.
- widget - сервис, который обрабатывает запросы от виджета.

Для запуска каждого из сервисов есть npm скрипты:
start-gateway
start-rand
start-widget

Для разработки необходимо запустить все 3 сервиса. При изменении кода сервис автоматически перезапустится.

После запуска сервиса widget по адресу http://localhost/widget/random будет доступен обработчик widget.random

Тестовое задание состоит из 3х частей:

1. Завести бесплатный тестовый аккаунт в amocrm https://www.amocrm.ru/
   Познакомиться с системой, посмотреть какие есть основные сущности, возможности для доработки.
   Ознакомиться с документацией https://www.amocrm.ru/developers/content/crm_platform/platform-abilities

2. Бэкенд часть.
   Необходимо дописать widget.random так, чтобы он получал в запросе min и max параметры, запрашивал данные у randomizer сервиса и возвращал в ответе полученное число.

3. Фронтенд.
   В созданном аккаунте amocrm необходимо создать виджет(https://www.amocrm.ru/developers/content/integrations/intro), который при переходе в карточку сделки(и только там), будет делать запрос на сервис widget в экшен, который был написан в первой части задания, с параметрами min === 0 и max === id сделки, получать рандомное число в ответ и выводить его в alert'е.

   Исходный код виджета положить в папку widget в корне репозитория.

Для отправки на проверку необходимо:

1. Оформить код в приватный(!) репозиторий.
2. Для bubji9@gmail.com дать доступ на просмотр.

При проверке задания будет учитываться:

1. Корректность работы в соответствии с заданием.
2. Линтинг и форматирование(в репозитории настроены eslint и prittier). Необходимо настроить их у себя в среде разработки. При проверке код не должен содержать варнинги и ошибки линтинга.
