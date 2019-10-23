!function (a, b) { "function" == typeof define && define.amd ? define(["numeral"], b) : b("object" == typeof module && module.exports ? require("./numeral") : a.numeral) }(this, function (a) { !function () { a.register("locale", "bg", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "хил", million: "млн", billion: "млрд", trillion: "трлн" }, ordinal: function (a) { return "" }, currency: { symbol: "лв" } }) }(), function () { a.register("locale", "chs", { delimiters: { thousands: ",", decimal: "." }, abbreviations: { thousand: "千", million: "百万", billion: "十亿", trillion: "兆" }, ordinal: function (a) { return "." }, currency: { symbol: "¥" } }) }(), function () { a.register("locale", "cs", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "tis.", million: "mil.", billion: "b", trillion: "t" }, ordinal: function () { return "." }, currency: { symbol: "Kč" } }) }(), function () { a.register("locale", "da-dk", { delimiters: { thousands: ".", decimal: "," }, abbreviations: { thousand: "k", million: "mio", billion: "mia", trillion: "b" }, ordinal: function (a) { return "." }, currency: { symbol: "DKK" } }) }(), function () { a.register("locale", "de-ch", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (a) { return "." }, currency: { symbol: "CHF" } }) }(), function () { a.register("locale", "de", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (a) { return "." }, currency: { symbol: "€" } }) }(), function () { a.register("locale", "en-au", { delimiters: { thousands: ",", decimal: "." }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (a) { var b = a % 10; return 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th" }, currency: { symbol: "$" } }) }(), function () { a.register("locale", "en-gb", { delimiters: { thousands: ",", decimal: "." }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (a) { var b = a % 10; return 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th" }, currency: { symbol: "£" } }) }(), function () { a.register("locale", "en-za", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (a) { var b = a % 10; return 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th" }, currency: { symbol: "R" } }) }(), function () { a.register("locale", "es-es", { delimiters: { thousands: ".", decimal: "," }, abbreviations: { thousand: "k", million: "mm", billion: "b", trillion: "t" }, ordinal: function (a) { var b = a % 10; return 1 === b || 3 === b ? "er" : 2 === b ? "do" : 7 === b || 0 === b ? "mo" : 8 === b ? "vo" : 9 === b ? "no" : "to" }, currency: { symbol: "€" } }) }(), function () { a.register("locale", "es", { delimiters: { thousands: ".", decimal: "," }, abbreviations: { thousand: "k", million: "mm", billion: "b", trillion: "t" }, ordinal: function (a) { var b = a % 10; return 1 === b || 3 === b ? "er" : 2 === b ? "do" : 7 === b || 0 === b ? "mo" : 8 === b ? "vo" : 9 === b ? "no" : "to" }, currency: { symbol: "$" } }) }(), function () { a.register("locale", "et", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: " tuh", million: " mln", billion: " mld", trillion: " trl" }, ordinal: function (a) { return "." }, currency: { symbol: "€" } }) }(), function () { a.register("locale", "fi", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "k", million: "M", billion: "G", trillion: "T" }, ordinal: function (a) { return "." }, currency: { symbol: "€" } }) }(), function () { a.register("locale", "fr-ca", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "k", million: "M", billion: "G", trillion: "T" }, ordinal: function (a) { return 1 === a ? "er" : "e" }, currency: { symbol: "$" } }) }(), function () { a.register("locale", "fr-ch", { delimiters: { thousands: "'", decimal: "." }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (a) { return 1 === a ? "er" : "e" }, currency: { symbol: "CHF" } }) }(), function () { a.register("locale", "fr", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (a) { return 1 === a ? "er" : "e" }, currency: { symbol: "€" } }) }(), function () { a.register("locale", "hu", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "E", million: "M", billion: "Mrd", trillion: "T" }, ordinal: function (a) { return "." }, currency: { symbol: " Ft" } }) }(), function () { a.register("locale", "it", { delimiters: { thousands: ".", decimal: "," }, abbreviations: { thousand: "mila", million: "mil", billion: "b", trillion: "t" }, ordinal: function (a) { return "º" }, currency: { symbol: "€" } }) }(), function () { a.register("locale", "ja", { delimiters: { thousands: ",", decimal: "." }, abbreviations: { thousand: "千", million: "百万", billion: "十億", trillion: "兆" }, ordinal: function (a) { return "." }, currency: { symbol: "¥" } }) }(), function () { a.register("locale", "lv", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: " tūkst.", million: " milj.", billion: " mljrd.", trillion: " trilj." }, ordinal: function (a) { return "." }, currency: { symbol: "€" } }) }(), function () { a.register("locale", "nl-be", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "k", million: " mln", billion: " mld", trillion: " bln" }, ordinal: function (a) { var b = a % 100; return 0 !== a && 1 >= b || 8 === b || b >= 20 ? "ste" : "de" }, currency: { symbol: "€ " } }) }(), function () { a.register("locale", "nl-nl", { delimiters: { thousands: ".", decimal: "," }, abbreviations: { thousand: "k", million: "mln", billion: "mrd", trillion: "bln" }, ordinal: function (a) { var b = a % 100; return 0 !== a && 1 >= b || 8 === b || b >= 20 ? "ste" : "de" }, currency: { symbol: "€ " } }) }(), function () { a.register("locale", "no", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (a) { return "." }, currency: { symbol: "kr" } }) }(), function () { a.register("locale", "pl", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "tys.", million: "mln", billion: "mld", trillion: "bln" }, ordinal: function (a) { return "." }, currency: { symbol: "PLN" } }) }(), function () { a.register("locale", "pt-br", { delimiters: { thousands: ".", decimal: "," }, abbreviations: { thousand: "mil", million: "milhões", billion: "b", trillion: "t" }, ordinal: function (a) { return "º" }, currency: { symbol: "R$" } }) }(), function () { a.register("locale", "pt-pt", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "k", million: "m", billion: "b", trillion: "t" }, ordinal: function (a) { return "º" }, currency: { symbol: "€" } }) }(), function () { a.register("locale", "ru-ua", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "тыс.", million: "млн", billion: "b", trillion: "t" }, ordinal: function () { return "." }, currency: { symbol: "₴" } }) }(), function () { a.register("locale", "ru", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "тыс.", million: "млн.", billion: "млрд.", trillion: "трлн." }, ordinal: function () { return "." }, currency: { symbol: "руб." } }) }(), function () { a.register("locale", "sk", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "tis.", million: "mil.", billion: "b", trillion: "t" }, ordinal: function () { return "." }, currency: { symbol: "€" } }) }(), function () { a.register("locale", "sl", { delimiters: { thousands: ".", decimal: "," }, abbreviations: { thousand: "k", million: "mio", billion: "mrd", trillion: "trilijon" }, ordinal: function () { return "." }, currency: { symbol: "€" } }) }(), function () { a.register("locale", "th", { delimiters: { thousands: ",", decimal: "." }, abbreviations: { thousand: "พัน", million: "ล้าน", billion: "พันล้าน", trillion: "ล้านล้าน" }, ordinal: function (a) { return "." }, currency: { symbol: "฿" } }) }(), function () { var b = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'üncü", 4: "'üncü", 100: "'üncü", 6: "'ncı", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'ıncı", 90: "'ıncı" }; a.register("locale", "tr", { delimiters: { thousands: ".", decimal: "," }, abbreviations: { thousand: "bin", million: "milyon", billion: "milyar", trillion: "trilyon" }, ordinal: function (a) { if (0 === a) return "'ıncı"; var c = a % 10, d = a % 100 - c, e = a >= 100 ? 100 : null; return b[c] || b[d] || b[e] }, currency: { symbol: "₺" } }) }(), function () { a.register("locale", "uk-ua", { delimiters: { thousands: " ", decimal: "," }, abbreviations: { thousand: "тис.", million: "млн", billion: "млрд", trillion: "блн" }, ordinal: function () { return "" }, currency: { symbol: "₴" } }) }(), function () { a.register("locale", "vi", { delimiters: { thousands: ".", decimal: "," }, abbreviations: { thousand: " nghìn", million: " triệu", billion: " tỷ", trillion: " nghìn tỷ" }, ordinal: function () { return "." }, currency: { symbol: "₫" } }) }() });