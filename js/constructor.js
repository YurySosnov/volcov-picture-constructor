// const systemLang = 'ru';
// const defaultInteriorTone = 'light';
// const defaultInteriorColor = 'black';
// const wallColors = [
//     {
//         id: 'black',
//         name: {
//             en: 'Black',
//             ru: 'Чёрный'
//         },
//         code: '000000',
//         contrast: 'white'
//     },
//     {
//         id: 'grey75',
//         name: {
//             en: 'Grey 75%',
//             ru: 'Серый 75%'
//         },
//         code: '404040',
//         contrast: 'white'
//     },
//     {
//         id: 'grey50',
//         name: {
//             en: 'Grey 50%',
//             ru: 'Серый 50%'
//         },
//         code: '808080',
//         contrast: 'white'
//     },
//     {
//         id: 'grey25',
//         name: {
//             en: 'Grey 25%',
//             ru: 'Серый 25%'
//         },
//         code: 'c0c0c0',
//         contrast: 'black'
//     },
//     {
//         id: 'white',
//         name: {
//             en: 'White',
//             ru: 'Белый'
//         },
//         code: 'ffffff',
//         contrast: 'black'
//     },
//     {
//         id: 'crema',
//         name: {
//             en: 'Crema',
//             ru: 'Кремовый'
//         },
//         code: 'e9e2cf',
//         contrast: 'black'
//     },
//     {
//         id: 'fawn',
//         name: {
//             en: 'Fawn',
//             ru: 'Палевый'
//         },
//         code: 'cebb96',
//         contrast: 'black'
//     },
//     {
//         id: 'brown',
//         name: {
//             en: 'Brown',
//             ru: 'Коричневый'
//         },
//         code: '58403a',
//         contrast: 'white'
//     },
//     {
//         id: 'red',
//         name: {
//             en: 'Red',
//             ru: 'Красный'
//         },
//         code: 'd32a30',
//         contrast: 'white'
//     },
//     {
//         id: 'orange',
//         name: {
//             en: 'Orange',
//             ru: 'Оранжевый'
//         },
//         code: 'da572f',
//         contrast: 'white'
//     },
//     {
//         id: 'mustard',
//         name: {
//             en: 'Mustard',
//             ru: 'Горчичный'
//         },
//         code: 'df9238',
//         contrast: 'black'
//     },
//     {
//         id: 'khaki',
//         name: {
//             en: 'Khaki',
//             ru: 'Хаки'
//         },
//         code: '948459',
//         contrast: 'white'
//     },
//     {
//         id: 'green',
//         name: {
//             en: 'Green',
//             ru: 'Зелёный'
//         },
//         code: '154b39',
//         contrast: 'white'
//     },
//     {
//         id: 'blue',
//         name: {
//             en: 'Blue',
//             ru: 'Синий'
//         },
//         code: '0b5b76',
//         contrast: 'white'
//     },
//     {
//         id: 'mint',
//         name: {
//             en: 'Mint',
//             ru: 'Мятный'
//         },
//         code: 'afd3bf',
//         contrast: 'black'
//     },
// ];
const defaultWallColors = [
    {
        id: 'black',
        name: {
            en: 'Black',
            ru: 'Чёрный'
        },
        code: '000000',
        contrast: 'white'
    },
    {
        id: 'grey75',
        name: {
            en: 'Grey 75%',
            ru: 'Серый 75%'
        },
        code: '404040',
        contrast: 'white'
    },
    {
        id: 'grey50',
        name: {
            en: 'Grey 50%',
            ru: 'Серый 50%'
        },
        code: '808080',
        contrast: 'white'
    },
    {
        id: 'grey25',
        name: {
            en: 'Grey 25%',
            ru: 'Серый 25%'
        },
        code: 'c0c0c0',
        contrast: 'black'
    },
    {
        id: 'white',
        name: {
            en: 'White',
            ru: 'Белый'
        },
        code: 'ffffff',
        contrast: 'black'
    },
    {
        id: 'crema',
        name: {
            en: 'Crema',
            ru: 'Кремовый'
        },
        code: 'e9e2cf',
        contrast: 'black'
    },
    {
        id: 'fawn',
        name: {
            en: 'Fawn',
            ru: 'Палевый'
        },
        code: 'cebb96',
        contrast: 'black'
    },
    {
        id: 'brown',
        name: {
            en: 'Brown',
            ru: 'Коричневый'
        },
        code: '58403a',
        contrast: 'white'
    },
    {
        id: 'red',
        name: {
            en: 'Red',
            ru: 'Красный'
        },
        code: 'd32a30',
        contrast: 'white'
    },
    {
        id: 'orange',
        name: {
            en: 'Orange',
            ru: 'Оранжевый'
        },
        code: 'da572f',
        contrast: 'white'
    },
    {
        id: 'mustard',
        name: {
            en: 'Mustard',
            ru: 'Горчичный'
        },
        code: 'df9238',
        contrast: 'black'
    },
    {
        id: 'khaki',
        name: {
            en: 'Khaki',
            ru: 'Хаки'
        },
        code: '948459',
        contrast: 'white'
    },
    {
        id: 'green',
        name: {
            en: 'Green',
            ru: 'Зелёный'
        },
        code: '154b39',
        contrast: 'white'
    },
    {
        id: 'blue',
        name: {
            en: 'Blue',
            ru: 'Синий'
        },
        code: '0b5b76',
        contrast: 'white'
    },
    {
        id: 'mint',
        name: {
            en: 'Mint',
            ru: 'Мятный'
        },
        code: 'afd3bf',
        contrast: 'black'
    },
];
const defaultSizes = [
    {
        id: 'lw120h80',
        width: 120,
        height: 80,
        name: '120x80',
        price: 0,
        orientation: 'landscape',
    },
    {
        id: 'lw90h60',
        width: 90,
        height: 60,
        name: '90x60',
        price: 0,
        orientation: 'landscape',
    },
    {
        id: 'lw75h50',
        width: 75,
        height: 50,
        name: '75x50',
        price: 0,
        orientation: 'landscape',
    },
    {
        id: 'lw60h40',
        width: 60,
        height: 40,
        name: '60x40',
        price: 0,
        orientation: 'landscape',
    },
    {
        id: 'lw45h30',
        width: 45,
        height: 30,
        name: '45x30',
        price: 0,
        orientation: 'landscape',
    },

    {
        id: 'pw80h120',
        width: 80,
        height: 120,
        name: '80x120',
        price: 0,
        orientation: 'portail',
    },
    {
        id: 'pw60h90',
        width: 60,
        height: 90,
        name: '60x90',
        price: 0,
        orientation: 'portail',
    },
    {
        id: 'pw50h75',
        width: 50,
        height: 75,
        name: '50x75',
        price: 0,
        orientation: 'portail',
    },
    {
        id: 'pw40h60',
        width: 40,
        height: 60,
        name: '40x60',
        price: 0,
        orientation: 'portail',
    },
    {
        id: 'pw30h45',
        width: 30,
        height: 45,
        name: '30x45',
        price: 0,
        orientation: 'portail',
    },
];
const defaultBorders = [
    {
        id: 'wood',
        pattern: 'images/borders/wood.png',
        name: 'Дерево',
        price: 0,
    },
    {
        id: 'metal01',
        pattern: 'images/borders/metal01.png',
        name: 'Металл<br/>0.1',
        price: 0,
    },

    {
        id: 'metal021',
        pattern: 'images/borders/metal021.png',
        name: 'Металл<br/>0.21',
        price: 0,
    },

    {
        id: 'metal032',
        pattern: 'images/borders/metal032.png',
        name: 'Металл<br/>0.32',
        price: 0,
    },
]
const defaultMats = [
    {
        id: 'white',
        color: 'ffffff',
        name: '',
        price: 0,
    },
    {
        id: 'black',
        color: '000000',
        name: '',
        price: 0,
    }
]

function Constructor() {
    const _self = this;
    this.sizesQ = 0.75;
    this.pictureQ = 4.22;
    this.sizes = typeof sizes !== 'undefined' ? sizes : defaultSizes;
    this.borders = typeof borders !== 'undefined' ? borders : defaultBorders;
    this.mats = typeof mats !== 'undefined' ? mats : defaultMats;
    this.orientation = typeof pictureOrientation !== 'undefined' ? pictureOrientation : 'landscape';
    this.lang = typeof systemLang === 'string' ? systemLang : 'en';
    this.colors = typeof wallColors !== 'undefined' ? wallColors : defaultWallColors;
    this.defaultInteriorTone = typeof defaultInteriorTone !== 'undefined' ? defaultInteriorTone : 'light';
    this.defaultInteriorColorId = typeof defaultInteriorColorId !== 'undefined' ? defaultInteriorColorId : 'black';
    this.defaultTechnologyId = typeof defaultTechnologyId !== 'undefined' ? defaultTechnologyId : 'plasticization';
    this.selected = {
        count: 1
    };
    this.prices = typeof prices !== 'undefined' ? prices : {
        'main': {
            lw120h80: 10000,
            lw90h60: 9000,
            lw75h50: 8000,
            lw60h40: 7000,
            lw145h30: 6000
        },
        'plasticization': {
            lw120h80: 5000,
            lw90h60: 4000,
            lw75h50: 3000,
            lw60h40: 2000,
            lw45h30: 1000
        },
        'canvas': {
            lw120h80: 8000,
            lw90h60: 7000,
            lw75h50: 6000,
            lw60h40: 5000,
            lw45h30: 4000
        },
        'border': {
            lw120h80: 6000,
            lw90h60: 5000,
            lw75h50: 4000,
            lw60h40: 3000,
            lw45h30: 2000
        },
        'mat': {
            lw120h80: 9000,
            lw90h60: 8000,
            lw75h50: 7000,
            lw60h40: 6000,
            lw45h30: 5000
        },
    };
    this.priceFull = 0;
    this.priceFullCounted = 0;
    this.init = function () {
        _self.loadDataFromStorage();
        _self.initInteriorWallColorChange();
        _self.initInteriorToneChange();
        _self.initSizeChange();
        _self.initBorderChange();
        _self.initMatChange();
        _self.initTechnologyChange();
        _self.initCountChange();
        _self.applyPhoto('images/example.jpg');
    }

    /* VIEW PANEL */

    this.generateColorsPanel = function () {
        let colorsHtml = '';
        for (let i = 0, len = _self.colors.length; i < len; i++) {
            let colorHtml = `<div 
            class="color color-${_self.colors[i].id} color-contrast-${_self.colors[i].contrast}" 
            title="${_self.colors[i].name[_self.lang]}" 
            style="background-color: #${_self.colors[i].code}"
            data-color-id="${_self.colors[i].id}"></div>`;
            colorsHtml += colorHtml;
        }
        $('#constructor-colors').html(colorsHtml);
    }
    this.changeInteriorWallColor = function (colorId) {
        let selectedColor = _self.colors.find(colorItem => colorItem.id === colorId);
        $('#constructor-wall-color').css({
            'background-color': `#${selectedColor.code}`
        });
        $('#constructor-colors .color.selected')
            .removeClass('selected');
        $(`#constructor-colors .color-${colorId}`)
            .addClass('selected');
        _self.selected.interiorColor = colorId;
        _self.saveDataToStorage();
    }
    this.changeInteriorImage = function (interiorTone) {
        $('#constructor-interior-image')
            .removeClass('light')
            .removeClass('dark')
            .removeClass('color')
            .addClass(interiorTone);
        _self.selected.interiorTone = interiorTone;
        _self.saveDataToStorage();
    }
    this.initInteriorWallColorChange = function () {
        _self.generateColorsPanel();
        _self.changeInteriorWallColor(_self.selected.interiorColor || _self.defaultInteriorColorId);
        $('#constructor-colors').find('.color').on('click', function () {
            let colorId = $(this).data('color-id');
            _self.changeInteriorWallColor(colorId);
        });
    }
    this.initInteriorToneChange = function () {
        _self.changeInteriorImage(_self.selected.interiorTone || _self.defaultInteriorTone);
        $('#constructor-interiors').find('.interior').on('click', function () {
            _self.changeInteriorImage($(this).data('interior'));
        });
    }
    this.applyPhoto = function (imgUrl) {
        console.log(imgUrl);
        $('#constructor-picture .picture-canvas-main').css({
            'background-image': `url(${imgUrl})`
        });
        $('#constructor-picture .picture-canvas-right .canvas-picture').css({
            'background-image': `url(${imgUrl})`
        });
        $('#constructor-picture .picture-canvas-bottom .canvas-picture').css({
            'background-image': `url(${imgUrl})`
        });
        $('#constructor-picture .plasticization-main').css({
            'background-image': `url(${imgUrl})`
        });
        $('#constructor-picture .border-main').css({
            'background-image': `url(${imgUrl})`
        });
        $('#constructor-picture .mat-main').css({
            'background-image': `url(${imgUrl})`
        });
    }



    /* CONFIG PANEL */

    this.generateSizes = function () {
        const sizes = _self.sizes.filter(item => item.orientation === _self.orientation);
        let sizesHtml = '';
        for (let i = 0, len = sizes.length; i < len; i++) {
            let s = sizes[i];
            let width = Math.round(s.width * _self.sizesQ);
            let height = Math.round(s.height * _self.sizesQ);
            let name = s.name;
            let id = s.id;
            let sizeHtml = `<div class="size size-id-${id}" data-size-id="${id}">
                <div class="name">${name}</div>
                <div class="rect" style="width: ${width}px; height: ${height}px;"></div>
              </div>`;
            sizesHtml += sizeHtml;
        }
        $('#constructor-sizes').html(sizesHtml);
    }
    this.changeSize = function (sizeId) {
        $('#constructor-sizes .size').removeClass('selected');
        $(`#constructor-sizes .size.size-id-${sizeId}`).addClass('selected');
        const size = _self.sizes.find(item => item.id === sizeId);
        const w = Math.floor(size.width * _self.pictureQ);
        const h = Math.floor(size.height * _self.pictureQ);
        $('#constructor-picture').css({
            'width': `${w}px`,
            'height': `${h}px`
        });
        _self.selected.size = sizeId;
        _self.calculatePriceCounted();
        _self.saveDataToStorage();
    }
    this.initSizeChange = function () {
        _self.generateSizes();
        $('#constructor-sizes .size').on('click', function () {
            let sizeId = $(this).data('size-id');
            _self.changeSize(sizeId);
        });
        const sizes = _self.sizes.filter(item => item.orientation === _self.orientation);
        const sizeExist = _self.sizes.find(item => item.id === _self.selected.size);
        _self.changeSize(sizeExist && _self.selected.size || sizes[0].id);
    }
    this.generateBorders = function () {
        const borders = _self.borders;
        let bordersHtml = '';
        for (let i = 0, len = borders.length; i < len; i++) {
            let b = borders[i];
            let name = b.name;
            let id = b.id;
            let pattern = b.pattern;
            let borderHtml = `<div class="border border-id-${id}" data-border-id="${id}">
                <div class="name">${name}</div>
                <div class="rect">
                    <div class="thumbnail">
                        <div class="top">
                            <div class="border-image" style="background-image: url('${pattern}');"></div>
                        </div>
                        <div class="left">
                            <div class="left border-image" style="background-image: url('${pattern}');"></div>
                        </div>
                    </div>
                </div>
              </div>`;
            bordersHtml += borderHtml;
        }
        $('#constructor-borders').html(bordersHtml);
    }
    this.changeBorder = function (borderId) {
        $('#constructor-borders .border').removeClass('selected');
        $(`#constructor-borders .border.border-id-${borderId}`).addClass('selected');
        const border = _self.borders.find(item => item.id === borderId);
        let p = border.pattern;
        $('#constructor-picture .border-image').css({
            'background-image': 'url("' + p + '")',
        });
        _self.selected.border = borderId;
        _self.calculatePriceCounted();
        _self.saveDataToStorage();
    }
    this.initBorderChange = function () {
        _self.generateBorders();
        $('#constructor-borders .border').on('click', function () {
            let borderId = $(this).data('border-id');
            _self.changeBorder(borderId);
        });
        const borders = _self.borders;
        _self.changeBorder(_self.selected.border || borders[0].id);
    }
    this.generateMats = function () {
        const mats = _self.mats;
        let matsHtml = '';
        for (let i = 0, len = mats.length; i < len; i++) {
            let m = mats[i];
            let name = m.name;
            let id = m.id;
            let c = m.color;
            let matHtml = `<div class="mat mat-id-${id}" data-mat-id="${id}">
                <div class="name">${name}</div>
                <div class="rect">
                    <div class="top" style="background-color: #${c}"></div>
                    <div class="left" style="background-color: #${c}"></div>
                </div>
              </div>`;
            matsHtml += matHtml;
        }
        $('#constructor-mats').html(matsHtml);
    }
    this.changeMat = function (matId) {
        $('#constructor-mats .mat').removeClass('selected');
        $(`#constructor-mats .mat.mat-id-${matId}`).addClass('selected');
        const mat = _self.mats.find(item => item.id === matId);
        let c = mat.color;
        $('#constructor-picture .mat-outer').css({
            'background-color': '#' + c,
        });
        _self.selected.mat = matId;
        _self.calculatePriceCounted();
        _self.saveDataToStorage();
    }
    this.initMatChange = function () {
        _self.generateMats();
        $('#constructor-mats .mat').on('click', function () {
            let matId = $(this).data('mat-id');
            _self.changeMat(matId);
        });
        const mats = _self.mats;
        _self.changeMat(_self.selected.mat || mats[0].id);
    }
    this.showTechnology = function () {
        $('#constructor-picture .picture-technology').removeClass('show');
        $('#constructor-picture .picture-technology.picture-' + _self.selected.technology).addClass('show');
    }
    this.changeTechnology = function (technologyId) {
        const radioGroup = 'technology';
        $('#constructor-config .item-check .checkbox[data-radio-group="' + radioGroup + '"]').removeClass('selected');
        $('#constructor-config .item-check .checkbox[data-technology-id="' + technologyId + '"]').addClass('selected');
        _self.selected.technology = technologyId;
        _self.calculatePriceCounted();
        _self.saveDataToStorage();
        _self.showTechnology();
    }
    this.initTechnologyChange = function () {
        const radioGroup = 'technology';
        $('#constructor-config .item-check .checkbox[data-radio-group="' + radioGroup + '"]').on('click', function () {
            let technologyId = $(this).data('technology-id');
            _self.changeTechnology(technologyId);
        });
        _self.changeTechnology(_self.selected.technology || _self.defaultTechnologyId);
    }
    this.changeCount = function (count) {
        if (!count) count = 1;
        _self.selected.count = count;
        _self.calculatePriceCounted();
        _self.saveDataToStorage();
    }
    this.initCountChange = function () {
        $('#constructor-quantity .dec').on('click', function () {
            _self.selected.count = _self.selected.count - 1;
            _self.changeCount(_self.selected.count);
        });
        $('#constructor-quantity .inc').on('click', function () {
            _self.selected.count = _self.selected.count + 1;
            _self.changeCount(_self.selected.count);
        });
    }

    this.calculatePrice = function () {
        let result = !!this.prices.main[this.selected.size] ? this.prices.main[this.selected.size] : 0;
        result += !!this.prices[this.selected.technology] && !!this.prices[this.selected.technology][this.selected.size]
            ? this.prices[this.selected.technology][this.selected.size]
            : 0;
        this.priceFull = result;
        $('#constructor-quantity .value').html(result);
    }
    this.calculatePriceCounted = function () {
        _self.calculatePrice();
        _self.priceFullCounted = _self.priceFull * _self.selected.count;
        $('#constructor-price-counted').html(_self.priceFullCounted);
    }

    this.initCheckboxes = function () {
        $('#constructor-config .item-check .checkbox').on('click', function () {
            let radioGroup = $(this).data('radio-group');
            if (!!radioGroup) {
                $('#constructor-config .item-check .checkbox[data-radio-group="' + radioGroup + '"]').removeClass('selected');
                $(this).addClass('selected');
            }
        });
    }



    /* LOCAL STORAGE */

    this.saveDataToStorage = function () {
        window.localStorage.setItem('constructorSelected', JSON.stringify(_self.selected));
    }
    this.loadDataFromStorage = function () {
        let selected = JSON.parse(window.localStorage.getItem('constructorSelected'));
        _self.selected = selected;
    }

    this.getSelected = function () { return _self.selected };
}

$(function () {
    constructor = new Constructor();
    constructor.init();
});