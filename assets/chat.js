let d =
{
  "mesbot": [
    {
      "type": "text",
      "text": "Здравствуйте!<br>Меня зовут Ольга. Я онлайн-консультант официального автосалона CHERY",
      "stepbot": 1,
      "noscroll": "true",
      "sleep": "2200"
    },
    {
      "type": "text",
      "text": "Пожалуйста, ответьте на пару вопросов, чтобы я могла составить для вас предложение с вариантами комплектации и стоимостью.",
      "stepbot": 2,
      "noscroll": "true",
    },
    {
      "type": "auto",
      "text": "Какую модель автомобиля вы рассматриваете?<br><strong>Выберите модель из списка, нажав на нее:</strong>",
      "stepbot": 3,
      "step": "auto",
      "goal": "auto",
      "noscroll": "true",
      "categories": [
        {
          "name": "",
          "items": [
            {
              "name": "Tivoil",
              "fullname": "Tivoil",
              "price": "от 1 149 000 р",
              "img": "https://res.cloudinary.com/daavbaof3/image/upload/v1682855659/car-card_eh7nv7.png",
              "link": "",
              "profit": "",
            },
            {
              "name": "Tivoil",
              "fullname": "Tivoil",
              "price": "от 1 149 000 р",
              "img": "https://res.cloudinary.com/daavbaof3/image/upload/v1682855659/car-card_eh7nv7.png",
              "link": "",
              "profit": ""
            },
            {
              "name": "Tivoil",
              "fullname": "Tivoil",
              "price": "от 1 149 000 р",
              "img": "https://res.cloudinary.com/daavbaof3/image/upload/v1682855659/car-card_eh7nv7.png",
              "link": "",
              "profit": ""
            },
            {
              "name": "Tivoil",
              "fullname": "Tivoil",
              "price": "от 1 149 000 р",
              "img": "https://res.cloudinary.com/daavbaof3/image/upload/v1682855659/car-card_eh7nv7.png",
              "link": "",
              "profit": "",
              "id": 1
            },
          ]
        }
      ],
      "buts": [
        {
          "text": "Не знаю / Не определился",
          "usertext": "Не знаю / Не определился",
          "id": 1
        },
      ],
    },
    {
      "type": "text",
      "text": "С этой моделью в подарок идет КАСКО и резина! Отличный выбор!",
      "stepbot": 4,
      "noscroll": "true",
    },
    {
      "type": "choose",
      "text": "Теперь давайте подберем подходящую комплектацию",
      "stepbot": 5,
      "step": "options",
      "goal": "options",
      "autoOptions": [
        {
          "autoName": "Tivoli",
          "autoId": 1,
          "options": [
            {
              "optionName": "Двигатель 1.6L  |  87 л.с. КПП Механическая",
              "id": 1,
            },
            {
              "optionName": "Двигатель 1.6L  |  106 л.с. КПП Механическая",
              "id": 2,
            },
            {
              "optionName": "Двигатель 1.6L  |  87 л.с. КПП Автомат",
              "id": 3,
            },
            {
              "optionName": "Двигатель 1.6L  |  98 л.с. КПП Автомат (Полный привод)",
              "id": 4,
            },
          ]
        },

      ],
    },
    {
      "type": "text",
      "text": "Зафиксировала! Теперь давайте подберем цвет авто.",
      "stepbot": 6,
      "noscroll": "true",
    },
    {
      "type": "color",
      "text": "Выберите цвет автомобиля",
      "stepbot": 7,
      "step": "term",
      "goal": "term",
      "buts": [
        {
          "hex": "#090909",
          "text": "Черный",
          "id": 1
        },
        {
          "hex": "#dc1111",
          "text": "Красный",
          "id": 2
        },

        {
          "hex": "#f3f3f3",
          "text": "Белый",
          "id": 3
        },
        {
          "hex": "#d06b1a",
          "text": "Оранжевый",
          "id": 4
        },
        {
          "hex": "#666",
          "text": "Серый",
          "id": 5
        },
        {
          "hex": "#aaaaaa",
          "text": "Серебристый",
          "id": 6
        },
        {
          "hex": "#0b58cc",
          "text": "Синий",
          "id": 7
        },
        {
          "hex": "",
          "text": "Другой",
          "id": 8
        }
      ],
    },
    {
      "type": "text",
      "text": " Предварительная стоимость {categories} - <span>{price}</span>",
      "stepbot": 9
    },
    {
      "type": "text",
      "text": "Я рассчитаю точную стоимость {categories} с учетом выбранных опций. Перезвоню через 2-3 минуты.",
      "stepbot": 10
    },
    {
      "type": "phone",
      "text": "Оставьте Ваш номер телефона",
      "stepbot": 11,
      "noscroll": "2500"
    }
  ]
}
