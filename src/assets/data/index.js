import bo1 from "../card-img/bo1.jpg";

import t1 from '../card-img/t1.jpeg'
import t2 from '../card-img/t2.jpeg'
import t3 from '../card-img/t3.jpeg'
import t4 from '../card-img/t4.jpeg'

// термос плюс муфта 

import p1 from '../card-img/p1.jpeg'
import p2 from '../card-img/p2.jpeg'
import p3 from '../card-img/p3.jpeg'
import p4 from '../card-img/p4.jpeg';


import vanil from '../card-img/2vanil.jpg';
import zefir from '../card-img/4_zefir.jpg'
import sweet from '../card-img/6_sweet.jpg'
import style from '../card-img/8_Style.jpg'
import bisquit from '../card-img/10_bisquit.jpg'
import kashemir from '../card-img/11_kashemir.jpg'
import pinkrabts from '../card-img/12_pink_rabts.jpg'
import ezhevika from '../card-img/13_ezhevika.jpg'
import pljush from '../card-img/14_pljush.jpg'
import pushok from '../card-img/15_pushok.jpg'
import dushka from '../card-img/16_dushka.jpg'
import kashemirzaiki from '../card-img/9_kashemir_zaiki.jpg'
import sugar from '../card-img/1_sugar.jpg'
import grey from '../card-img/3_grey.jpg'
import sochnaya from '../card-img/7_sochnaya.jpg'
import korobka from '../card-img/5_korobka.jpg'
import termos from '../card-img/17_termos.jpg'



const items = [
  {
    id: 1,
    pic: sugar,
    name: "Сахарная пудра",
    price: "750  грн",
    disc:
      "Белый хлопковый плед и плюшевая игрушка в уникальном боксе с атласной лентой – замечательный подарок  для ребенка.",
    contains: `Внутри: белый хлопковый плед, 
    игрушка, 
    коробка.`
  },
  {
    id: 2,
    pic: vanil,
    name: "Ванильное пралине",
    price: "750 грн",
    disc:
      "Подарочный набор с пледиком и подвеской порадуют даже самую прихотливую мамочку и ее малыш!",
    contains: `В комплекте: бежевый хлопковый плед, 
    игрушка, 
    упаковка.`
  },
  {
    id: 3,
    pic: grey,
    name: "Сладкая дымка",
    price: "750 грн",
    disc:
      "Серое одеяльце и игрушка в упаковке станут отличным подарком на рождение ребенка, крестины.",
    contains: `Внутри: серый хлопковый плед, 
    игрушка, 
    коробка.`
  },
  {
    id: 4,
    pic: zefir,
    name: "Зефирная нежность",
    price: "690 грн",
    disc:
      "Комплект из пледика и занимательной погремушки – мечта каждого маленького ребенка!",
    contains: `В наборе: голубой хлопковый плед, 
    погремушка, 
    упаковка.`
  },
  {
    id: 5,
    pic: korobka,
    name: `Первые мечты`,
    price: "690 грн",
    disc:
      "Подарочный набор с одеяльцем и погремушкой – прекрасный подарок для ребенка!",
    contains: `Внутри: розовый хлопковый плед, 
    погремушка, 
    бокс.`
  },
  {
    id: 6,
    pic: sweet,
    name: `Сладкий плюш`,
    price: "790 грн",
    disc:
      "Самая приятная прогулка для малыша – когда его согревает нежный пледик и радует ушастый зайка.",
    contains: `В комплекте: плюшевый плед, 
    игрушка, 
    красивая упаковка.`
  },
  {
    id: 7,
    pic: sochnaya,
    name: "Сочная ягодка",
    price: "650 грн",
    disc:
      "Яркие наряды идеально дополнят образ маленькой девочки на первой в ее жизни фотосессии.",
    contains: `В наборе: 2 ромпера, 
    2 повязки, 
    коробка с лентой.
    Возраст: 0-6 мес.`
  },
  {
    id: 8,
    pic: style,
    name: "Сочная ягодка",
    price: "650 грн",
    disc:
      "Яркие наряды идеально дополнят образ маленькой девочки на первой в ее жизни фотосессии.",
    contains: `В наборе: 2 ромпера, 
    2 повязки, 
    коробка с лентой.
    Возраст: 0-6 мес.`
  },
  {
    id: 9,
    pic: kashemirzaiki,
    name: "Кашемир",
    price: "920 грн",
    disc:
      "Как удивить самую изысканную молодую мамочку? Подарите эксклюзивный набор от Hot Mommy в белоснежном оформлении!",
    contains: `В наборе: кашемировый плед, 
    2 погремушки, 
    дизайнерский бокс.`
  },
  {
    id: 10,
    pic: bisquit,
    name: `Вязаный бисквит`,
    price: "490 грн",
    disc:
      "Must have каждого малыша – уютный пледик от Hot Mommy.",
    contains: `Размер: 90х85 см.
    Состав: 100% хлопок.`
  },
  {
    id: 11,
    pic: kashemir,
    name: `Кашемировое бизе`,
    price: "670 грн",
    disc:
      "Теплый и невероятно уютный плед из кашемира согреет Вашего малыша и эффектно дополнит образ коляски!",
    contains: `Размер: 95х90 см.
    Состав: 100% кашемир.`
  },
  {
    id: 12,
    pic: pinkrabts,
    name: `Клубничные сливки`,
    price: "280 грн",
    disc:
      "Погремушки нежно-розового цвета станут первыми и любимыми игрушками милой принцессы! Упакованы в мешочек из органзы.",
    contains: ``
  },
  {
    id: 13,
    pic: ezhevika,
    name: `Ежевичные сливки`,
    price: "280 грн",
    disc:
      "Каждые маленькие ручки мечтают о погремушках от Hot Mommy!",
    contains: ``
  },
  {
    id: 14,
    pic: pljush,
    name: `Плюшевый завиток`,
    price: "350 грн",
    disc:
      "Увлекательная змейка украсит кроватку, переноску или коляску и станет любимицей ребенка.",
    contains: ``
  },
  {
    id: 15,
    pic: pushok,
    name: `Пушок`,
    price: "250 грн",
    disc:
      "Музыкальная подвеска с универсальным креплением. Малышу обязательно понравится!",
    contains: ``
  },
  {
    id: 16,
    pic: dushka,
    name: `Душка`,
    price: "650 грн",
    disc:
      "Рюкзак с игрушкой, о которой мечтает каждая принцесса!",
    contains: `Размер: 21х26х7 см`
  },
  {
    id: 17,
    pic: termos,
    name: `Термос`,
    price: "420 грн",
    disc:
      "Стильный и необходимый аксессуар для автомобиля, для занятий спортом, а также для прогулок. Сохраняет температурный режим от 6 до 12 часов!",
    contains: `Материал: двухслойная нержавеющая сталь. 
    Объём: 0,5 л.`
  },
];

export default items;
