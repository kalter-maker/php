const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 8,
        "list": {     
            "id_1": "Анна",
            "id_2": "Мария",
            "id_3": "Ирина",
            "id_4": "Александра",
            "id_5": "Дарья",
            "id_6": "Наталья",
            "id_7": "Софья",
            "id_8": "Елизавета"
        }
    }`,
    middleNameMaleJson: `{
        "count": 4,
        "list": {     
            "id_1": "Юрьевич",
            "id_2": "Олегович",
            "id_3": "Петрович",
            "id_4": "Иванович"
        }
    }`,
    middleNameFemaleJson: `{
        "count": 4,
        "list": {     
            "id_1": "Юрьевна",
            "id_2": "Олеговна",
            "id_3": "Петровна",
            "id_4": "Ивановна"
        }
    }`,

    professionMaleJson: `{
    "count": 8,
        "list": {     
            "id_1": "Шахтер",
            "id_2": "Солдат",
            "id_3": "Грузщик",
            "id_4": "Повар",
            "id_5": "Полиция",
            "id_6": "Врач",
            "id_7": "Инженер",
            "id_8": "Адвокат"
        }
    }`,
    professionFemaleJson: `{
        "count": 5,
            "list": {     
                "id_1": "Повар",
                "id_2": "Полиция",
                "id_3": "Врач",
                "id_4": "Инженер",
                "id_5": "Адвокат",
                "id_5": "Секретарша"
            }
        }`,
    month: `{
        "count": 12,
            "list": {     
                "id_1": "января",
                "id_2": "февраля",
                "id_3": "марта",
                "id_4": "апреля",
                "id_5": "мая",
                "id_6": "июня",
                "id_7": "июля",
                "id_8": "августа",
                "id_9": "сентября",
                "id_10": "октября",
                "id_11": "ноября",
                "id_12": "декабря"
            }
        }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 2, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function(json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.firstNameMaleJson);
        } else if (this.person.gender === this.GENDER_FEMALE) {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },


    randomSurname: function() {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } else if (this.person.gender === this.GENDER_FEMALE) {
            return this.randomValue(this.surnameJson) + "а";
        }
    },

    randomMiddleName: function() {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.middleNameMaleJson);
        } else if (this.person.gender === this.GENDER_FEMALE) {
            return this.randomValue(this.middleNameFemaleJson);
        }
    },

    randomGender: function() {
        return this.randomIntNumber() === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomDateOfBirth: function() {
        const currentMonth = this.randomValue(this.month);
        if (currentMonth === 'февраля') {
            return this.randomIntNumber(28, 1) + " " + currentMonth + " " + this.randomIntNumber(2000, 1950);
        } else if (currentMonth === 'апреля' || currentMonth === 'июня' || currentMonth === 'сентября' || currentMonth === 'ноября') {
            return this.randomIntNumber(30, 1) + " " + currentMonth + " " + this.randomIntNumber(2000, 1950);
        } else {
            return this.randomIntNumber(31, 1) + " " + currentMonth + " " + this.randomIntNumber(2000, 1950);
        }
    },

    randomProfession: function() {
        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.professionMaleJson);
        } else if (this.person.gender === this.GENDER_FEMALE) {
            return this.randomValue(this.professionFemaleJson);
        }
    },



    getPerson: function() {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.middleName = this.randomMiddleName();
        this.person.dateOfBirth = this.randomDateOfBirth();
        this.person.profession = this.randomProfession();

        return this.person;
    }
};