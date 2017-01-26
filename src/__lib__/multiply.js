/*
*   | a b c |   | j k l |   | (aj + bm + cp) (ak + bn + cq) (al + bo + cr) |
*   | d e f | * | m n o | = | (dj + em + fp) (dk + en + fq) (dl + eo + fr) |
*   | g h i |   | p q r |   | (gj + hm + ip) (gk + hn + fq) (gl + ho + ir) |
*
*   | a b c |
*   | d e f | = [a,d,b,e,c,f]
*   | 0 0 1 |
*/

export default ([a,d,b,e,c,f], [j,m,k,n,l,o]) => [
  (a*j)+(b*m)+(c*0),
  (d*j)+(e*m)+(f*0),
  (a*k)+(b*n)+(c*0),
  (d*k)+(e*n)+(f*0),
  (a*l)+(b*o)+(c*1),
  (d*l)+(e*o)+(f*1),
]
