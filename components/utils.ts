export function clipText(text: string, maxLen: number): string {
    return text.length > maxLen ? text.substring(0, maxLen - 3) + '...' : text;
}

/*
 * https://codepen.io/iegik/pen/NGRzoY?editors=101
 * Parses URI search string into Object
 * Inspired by http://unixpapa.com/js/querystring.html
 *
 * @param {String} uri URI search string to parse
 * @param {Function} x parser for proprty value
 * @param {Function} y parser for proprty name
 * @returns {Object}
 */
export function parseURISearchParams(uri: string, x?: any, y?: any) {
    x =
        x ||
        function (x) {
            x = decodeURIComponent(x && x.replace(/\+/g, " "));
            return !isNaN(parseInt(x)) && !isNaN(x * 1) ? x * 1 : x;
        };
    y = y || decodeURIComponent;

    var o = {};

    if (uri === "") {
        return o;
    }

    function add(o, k, v) {
        if (o.hasOwnProperty(k)) {
            if (o[k] instanceof Array) {
                o[k].push(v);
            } else if (!(o[k] instanceof Object)) {
                o[k] = [o[k], v];
            }
        } else {
            o[k] = v;
        }
        o = o[k];
        return o;
    }

    return uri.match(/([^=&]+)(=([^&]*))?/g).reduce(function (c, p, i, _) {
        // @ts-ignore
        i = /([^=]+)(=(.*))?/.exec(p);
        const k = y(i[1]),
            v = i[3] || '';

        if (/\[/.test(k)) {
            k.match(/([^\[]+)|\[([^\]]+)\]/g).reduce(function (c, p, i, d) {
                return add(
                    c,
                    p.replace(/[\[\]]/g, ""),
                    d.length - 1 === i ? x(v) : {}
                );
            }, o);
        } else {
            add(c, k, x(v));
        }
        return o;
    }, o);
}
