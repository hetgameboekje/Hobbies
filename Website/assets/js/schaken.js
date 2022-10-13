var lq, x, xq, xb, I, ax, ux;
function schaak() {
    ax = "<table style='border:16px solid #aaa'>";
    for (ux = 18; ux < 98; document.getElementById('schaak_id').innerHTML = ax += ++ux % x - 9 ? "<th width=50 height=50 onclick='I[xb=" + ux + "]>8?schaak():zet_het(0,0,1)'style='font-size:40px'bgcolor=#" + (ux - xq ? ux * 0.9 & 1 || 9: "d") + "aa000>&#" + (I[ux] ? 9808 + lq[67 + I[ux]] : 160) + ";": ux++&&"<tr>") {
        xq = xb;
    }
}
function zet_het(schaakbord, bo, bi, qk) {
    schaakbord ^= 8;
    for (var kompoos, iz, un, hele, erge, goede_zet, welke_zet, d = bi && zet_het(schaakbord, 0) > 1e4, n, N = -1e8, O = 20; ++O < 99;) {
        if ((kompoos = I[goede_zet = O]) && (welke_zet = kompoos ^ schaakbord) < 7) {
            hele = welke_zet--&2 ? 8: 4;
            un = kompoos - 9 ? lq[61 + welke_zet] : 49;
            do {
                if (! (erge = I[goede_zet += lq[un]]) && !!welke_zet | hele < 3 || (erge + 1 ^ schaakbord) > 9 && welke_zet | hele > 2) {
                    if (! (erge - 2 & 7)) {
                        return 78 - bo << x;
                    }
                    n = welke_zet | (schaakbord ? goede_zet > 29: goede_zet < 91) ? kompoos: 6 ^ schaakbord;
                    iz = (erge && lq[erge & 7 | 32] * 2 - bo - welke_zet) + (welke_zet ? 0: n - kompoos ? 110: (hele < 2) + 1);
                    if (bi > bo || 1 < bi & bi == bo && iz > 2 | d) {
                        I[goede_zet] = n;
                        I[O] = 0;
                        iz -= zet_het(schaakbord, bo + 1, bi, iz - N);
                        if (! (bo || bi - 1 | xq - O | goede_zet - xb | iz < -1e4)) {
                            return (schaak()),
                            schaakbord && setTimeout("zet_het(8,0,2),zet_het(8,0,1)", 20);
                        }
                        I[O] = kompoos;
                        I[goede_zet] = erge;
                    }
                    if (iz > N || !bo & iz == N && Math.random() < 0.5) {
                        if (N = iz, bi > 1) {
                            if (bo ? qk - iz < 0: (xq = O, xb = goede_zet, 0)) {
                                return N;
                            }
                        }
                    }
                }
            }
            while (!erge & welke_zet > 2 || (goede_zet = O, (welke_zet || hele > 2 | (schaakbord ? O > 78: O < 41) & !erge) && ++un * --hele))
        }
    } {
        return N;
    }
}
for (xq = ax = ux = xb = ax = 5 - 5, x = 10, I = [], lq = []; lq[xq] = "ECDFBDCEAAAAAAAAIIIIIIIIMKLNJLKM@G@TSb~?A6J57IKJT576,+-48HLSUmgukgg OJNMLK  IDHGFE".charCodeAt(xq) - 64, xq++<120; I[xq - 1] = xq % x ? xq / x % x < 2 | xq % x < 2 ? 7: xq / x & 4 ? 0: lq[ax++] : 7) {};
setTimeout(function() {
    schaak();
},
80);