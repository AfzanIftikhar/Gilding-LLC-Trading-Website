import React from 'react'
import { useRef } from 'react';
import ProductCards from './ProductCards'
const FeaturedProducts = () => {
 const sliderRef = useRef(null);



const Products = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1711978477980-a0f1a05039a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRveW90YSUyMGNvcm9sbGElMjAyMDE4fGVufDB8fDB8fHww",
    title: "Toyota Corolla 2018",
    price: "$14,500",
    condition: "Used",
    location: "New York, USA"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1654870646430-e5b6f2c0fa93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhvbmRhJTIwY2l2aWMlMjAyMDIwfGVufDB8fDB8fHww",
    title: "Honda Civic 2020",
    price: "$19,800",
    condition: "Used",
    location: "London, UK"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1642381071059-7a8c84c197ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SW5kdXN0cmFpYWwlMjBkcmlsbCUyMG1hY2hpbmV8ZW58MHx8MHx8fDA%3D",
    title: "Industrial Drill Machine",
    price: "$450",
    condition: "New",
    location: "Berlin, Germany"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1698707781839-8739e5db5f12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYXZ5JTIwZHV0eSUyMGNhciUyMGJhdHRlcnl8ZW58MHx8MHx8fDA%3D",
    title: "Heavy Duty Car Battery",
    price: "$85",
    condition: "New",
    location: "Tokyo, Japan"
  },
  {
    id: 5,
    image: "https://plus.unsplash.com/premium_photo-1673208484517-deeab27359b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGlyZXN8ZW58MHx8MHx8fDA%3D",
    title: "Tires Set 18 inch",
    price: "$120",
    condition: "Used",
    location: "Paris, France"
  },
  {
    id: 6,
    image: "https://media.istockphoto.com/id/2210751613/photo/worker-uses-grinding-tool-to-shape-metal-while-sparks-fly.webp?a=1&b=1&s=612x612&w=0&k=20&c=MO7bVSEK6GxgjqypjWW-dZMGD_dLLtGjrAaojM9RE3U=",
    title: "Electric Grinder Machine",
    price: "$220",
    condition: "New",
    location: "Toronto, Canada"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1629055666341-5e505c77d49b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWVyY2VkZXMlMjAyMDE3fGVufDB8fDB8fHww",
    title: "Mercedes Benz GLC 2017",
    price: "$48,000",
    condition: "Used",
    location: "Dubai, UAE"
  },
  {
    id: 8,
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSEhMVFRUXFRgYFxgYGBoYFxoXGBcXFxcaFRYYHSggHxolGxcVIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGyslHyUtLS4tKy0vMC0tLS0tLS0tLS0tLS8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EAEgQAAEDAQQFBwcJCAEEAwAAAAEAAgMRBBIhMQUGQVFxImGBkbHB0RMyQlOSofAVI0NScoKiwtIUFjNik7Lh4gc0Y4PxJHOj/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAMREAAgECBQMDAgMJAAAAAAAAAAECAxEEEiExURMUQSJxoTJhM0KxIyRSYoGRwdHw/9oADAMBAAIRAxEAPwD7iiIgCIiAIiIAiIgCIiAIiIAi02y1MiY6SRwaxoq5xyAUDozXayWlrnWZzpWtcWkhpaKj7dDTnApgVWU4xV2yVFvYsiKGdpzdH1up2AodNu9V+P8A1WXc0uS/SnwTKKF+W3eq/F/qvPlt/qh7X+FHdUuf1HRnwTaKE+W3+rHtHwXh0671X4v9U7qlz+pPRnwTiKD+XH+rHWfBPlt/1B1lO6pcjoz4JxFBHTj/AFY6z4Lw6bk2Mb707qlyOjPgnkUG3TUm1jTwJHiu2waSEhult08ajrVoYinJ2TIdKS1aO9ERbGYREQBERAEREAREQBERAEREAREQBERAEREBSdf7CyeSKOYXo2C9cPmOe40Bc3bdDTQHDllcmjY2sIa0ANugADAACmQGzFSmt38Zv2B2uUdZcxvXk4ptzaO2kvSiXa3Ac/x4LOlCsY9hz+B4Kr666QlifEI5HMDg8mm0tLcfesUrm1ODnLKi1O3LM45bF8pOmrR6+Wv23DsK8+Upz9NL/Ud4q+U6uxlyfVw3mRzPii+TPtkhzkeeLj4rUZCdpTKSsC/4j6w8AbVqkkaM3tHSPFfKjwWJDeZRkLdl/N8H1B1qiGcsftt8Vj8oQ7Z4vbb4r5bUcy3MHMmRE9mvLPpw0pZ/Xxe23xXfYnUkb9oe/DvXyR7HU809RX1eyOq5h/mafeESyyXuc2JoqmtHe9y0IiL2jxwiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiICjf8AIFvjhe1zycWYACpNC6tOvauWzPBAdzA9a5P+ZG4wHeHjsK2aIdWKPnYz+0LysUvWz0qcV0ossMDsOKi9Z7LZSGPtLnNDSWtu1xLqEg3Wk+gpOzs58vBQmu8L3wMutc4iVpo0FxpdfsGxYRL0vxFrYh7mihhV7v6v+FkyXRQ+jef6ne9QI0VaDWkEv9Nw7Qt0eg7V6l/TQdpV7Lk9Bwh5m/7k3+36NGVneeLQf7np8s2AZWTrjj8VFfu9a/Un2mD8y2t1XtZ9ADi9ncU0Iy0fMvkkhrFZR5tkb7MY7An73xjBtlHtNH5FxDVK0n1Y4v8AALazU20H0oh9536E0KuOH8v5Np11p5tnA/8AJz/YXrdd5PUt9s+C0jUqbbJH+L9K3N1Jk9cz2Se9PSR+7f8AXPTrvL6pntOVm0XaPKNikpQvEbiK5E3TRVv9yHevb7B/UrBYLP5GNkd6pY0CtKZZGihtJpnPX6Lj+z/yXVF4CvV7R4wREQBERAEREAREQBEULpnTfk3eTjALhmTkOam0qs5qCuyYxcnZE0hVMfpyc5vpwAHcuWW0uf5znO4kntXM8XHwjZUH5Lq+2xjN7esLT8sQbJWnga9dFSZLMwm8WNLt9Mek7lzy6OjJBxFMcDgeggqndvg0WHj5Ze36bgHp/hd4LQ7WOHc89A8VTYbM1tKXsK+kaY7wCAekLY4qjxc/sOhEss+tLQORE53MSG+Kh7R/yM2M0lssrK5GrSDwNaHoUc56553BwuuAIOwgEdShYqZdUoLdEfr/AKwMtkUT2AC5JTziTymuOILRTzVJ6vu+YhP/AG2f2BV+3aJDwWRUYS5rjUm7RoeMBjjy+CsOhoDHEyOtbopWlK05lhVlm1Oj0qmoxLLZKLePjr+Opc1hNRTn700tbPJQvkDb10VpWlcQM6Gme5UWxlZt2R0UGJA4/HV1LOORUZ2uz8hC0ffJ/Ksf32l2Rx/iPerJM37SpwX1zsKLwnJUJ2udoONyEdDv1LW7XC0n1Y+6e9ymzJWCqF/kJz2rWvn51rtR9Jo+4FqdrNazlLT7jP0qHFllgqn2PoBaVmCvmz9YrV64+yz9KxZp21euf7h2BRkZPZT5R9NqtFoHYvnXy3afXye0rVqta3ywOL3FzhI4VJqaXWECvSVEo2RSphpU45mz6LHkOAWSwgdVrTvA7FmvcR4wREQBERAEREAREQBUG1YyP+27+4q/L54+MhxzrU1BxxrjjmuTF7I3obs9c1aws72/Ds+ONFkFwnSamVOSziYHbSeunXkue2/RtGT5Qx32br3EdNwDgSrHHZBQbKfFFR3JIZ1mCxECmHw1rX/0o22W+zxOpJIA6gNCHHA5EXQedV1LJX2OV8PMuOZq2TayWP1hPBkne1RVv1os2NL54N8SFKTNOlPhmi3TPbUx0vEUFaUqXNGZw35qU1ctDnwi+QXBzmkjI3XEVFMMqZc6jNIuZSryQ2hJ30DS7Dnw9ykdWponx/NAtaHOGOZPnE5nMuUvYr+XbyWywEBY6XgMkMjAReexwFcBU5VoMq8y8sZ2LrcFCM72dyiDUyeuMkQ4Fx7WhZx6mP8AXN9gnvCuUj2jznAV3kDqXhNMyOfdvU5mdPdVeSqjUs7bR1R/7rY3Utm2Z3QwDvKnxpGGoHlY6k0AvtqTsoKrG06UhjNJJGMNK0LgCRiMt1QUzSI69Z+fgiW6lxbZZD7I/KVtj1Ms/wBeU/eaPyKTtGm7PHS/KAHtD24E1aciLoOGfUuibSkLImzOcfJuu0N1xreBIwAr1qyuVdWt9yG/c6zf9z2/ALYzVOy/Ud0vd3FSOjtMQzuLIySQKmrSMK028QuaPWWB0ckjWvpHdvC6K0ebraC9TPnU2Yz1721MG6q2QZxH23/qXRY9HRwgtibdBN44k40AryidwWu26wRxxxSljyJQS2gbUYA8qrs8dm5YaJ06y0FzWsc262vKpiCabD8VVWnYhqq43d7FzsLqxs+yOxb1y6LPzTeHeV1L2IO8V7HlS3YREVyAiIgCIiAIiIAqbpiwFkp2XqkHfXOuzDwVyXPbrOx7T5SlBjWtKc9diyrU88bF6c8rKMSRsrw8Fi0A5GnDvC16W01Zon3fKOLTUXzG4NHM51PflwXrbrgHNIIOTmmoI3hw2LzZRsdidzRba34P/vB//OQdpHWrW04Zqp20UfAXEn526OarXOxp9gDpVldNgs3oSbHnZs3r5/r1/wBS2nqW/wB8iu7plFaR0XBM4PkaXODbvnOGAJPokfWKhSszehNQldnzSZq4J2HFfTjoSyj6IdLnntcuO02CzAfwY+loPar9RHW8VHhkVbIasZWlCADhXBzC0161KasSQkPEDqi8L2BABLQ0UwGFGD3qPtkuLBhS+0U5qgUWrUZ4vTMAFeSSWnknFwAay6KU96h7HHFXiy+2I0XeBio2ynEKSjOOKojJnzUxm0SzukcbzY5ZB9w1DcfRopvU+cvhlica3TyRua9pFBzVaT0rh0K0C3vYRUF07CN4o/CnPRTur2kLNI5ws8PkqNDnclragGg80nKu3eVeWx6FeXptbTR+xUNVrA2WSrn3Sy69uWJDssehd2vTPnYzvYR1OJ/Mo7ROihLaXRF125eIIFcWPDaU6+pSmv7qeRdu8p+SnYp/MWlL9stSItNpvth/lhunolkp7i1Wudwdophzpd/DIWKqCGktobsa2QjgHBw91FZtHvvaKeN173Sh3epZNW1o25Xyd2pBs+Q/j3XF/n+ZfFM+TtZlj71WDLcdOzY68w8WvDh72U6VY9RxZw29VvlyXtpeN4s5LsGVpTA402FQekLLWS1EZslLvumUtPve09CkrTt1ZXv439yywWdkmjQXNa4thkukgEtLb4qK5HkhatSWN8g5waL3lHNLqCtKMcATnTHJdWrHKsQbzStpzEu8Vwahv+akG54PW2n5VEtjnl9M1xL/AGX/AER/Cbxd/cV2KP0I7kHmcewHvUgvTou9OPseRP6mERFqUCIiAIiIAiIgCq+ttocXCIebQOPOSTnworQqdrRJ8/lgGtFes5dIWGJdoGtFeogLRYg4ZdChjYHREuhcY8cQMWk/zNOHTnzq0tII5lpmhC81Ox1kI7TguFlpicB9aMFwwxBAreaQaEUrlmsItd7IOS6dwp9eKQOPTdAr0KTnsQIyUfLoGN2LmhG4+Rr4PLRr9YvRc532Y5D+VcjtfIfRjlP3QO1wUhZ9WoKeZ7lsOgohkwKt4cE6len10cfNs8nSWDvKjbRrPaXZWbrf4NKuB0WwZNC5J7CB6KspR4IafJSpNL2ovZeha0X21N4mgvDHIK5at29hmfE2EMpeq4UqS1waRgP5q5qJ0nDRp61L6FtsT7Q6NrXX2+Uq40p5zQ4DHmbs9FTNprYvTWj8lusualGFRdmGKlWDb1ccliirKlpPQ1pZaTaLM29VxcPNqCQQ4EOI3uXTqvoN8Ac+Sgc4BobWtGjE1IwrWnV1WZrhkvJAMeCu3oauvJxysoVs1VtBlkex7Gh0jyDecDdc4uxo3cQuzS+gnzQwxF7Q6MNDnUJBowNNMjiRVWuQLlladxVczJdebs+Cv/u9WR7zJS/D5MgN23GsLq3v5a096k9F6HDLO+zl5cH3saUIvADAVO6vSukvAzIHEgLBmk4QcZYhxe3xS7I6k2rHmidWYoZGytfIS0mgN26agg1AbXbvXcNCQ35X8o+Va4Pxwo4gm7QYYgLUzT1mH08fQ4HfuT95bKBjMDwa8/lWibIbrSd9Tv0fYGQs8nGCG1JxJOJzxK1WPRsUIPkm3b2eJOQNMyd5XA7W2y/WeeDHd9Fqj1tgc5rGtkJc4NButAq40x5SlkdKs76MtOhD57ecHtHcpVQ2hj844b29hHiplehhXemjz6q9QREXQZhERAEREAREQBVbWiEiS8BgWivORUH3XfcrSubSFjErC04HYdxWVWGeNi8JZXco10HmPv6RtXpJGY6R3hZzlge6IuYXjEhrg7DEVwxGRzWD6jnHvXmOLR2J3AxHMtLm1miZ6JvuPOW3btfaJ6AtrQDkaH39K0gn9phBPoyc2fk/A9SoyyJ02YUqueSEbehdpOGa53u39Co0Sis6R1gs8TnMIeXNJBAaMxzuIwUDa9botkTzxLR2Erj1o/6mb7Vfwg96rlpotowR3xoQypknNp/yrgzyYaHVFb1dhOV0blYtA2aRs5ldI25IMG+kcKtzGwVwBVH0fA7yrDddSudDTI7VcNDQzeWhkvViyDRUlvzLmkkUpS9XGvpBTNJIwnFRk0uC92QKUAyKi7JmpUFYo5mU3WbTE8U5ZHIWtutNAG7RjiRXNQsumrS7OeTocR2UVz0noCKeTyj3PrdA5JAGFf5TvWsaqWYDFrzxee6i0UlY7adalGKTWvsUSS3THOaU8ZH+K4pwXecSeJJ7V9Nj1Zsvqutzz+ZbDoGyj6CPpbe7UzIv3dNbI+TGIDIBZAiuzrX1hujIW5QxDhGwdyyYwA4ADdQBR1CHjFwfNLNE53mtceAJ7Au6LR0xyhl9h3gvpDHZrcxM5V41+EfO2aCtRyhf00HaQuix6vWoSMcY6APa41ezIOB38yv57h/leVClyM3jJvwjfos/O8Qe49ym1A6OPzreB7Cp5d+E/D/qeXW+oIiLqMQiIgCIiAIiIAq3rRpBwPkmkgU5R312cO1WRUzWOX/5DhuDRx5IOHWsMRJqGhrSV5Fat+i2vxIoRiHA0cD/ACkYg8Fpjtk0WD/nW/WFA8cRgHe48VOloK45YV5tzrPbLa45MWurToIPODiDxXpIbaIScah4BPNQge89SirZozG80lj9jmmh6d45jguC1aWnY25NAZgDUOjN11Rkbux3OCMzgBglrgv8toXNJMqTZ9cfrQWrDYWxUPE1qlo1tld5llf95zW9l5V6bJuiw2qzQlxeYoy45ksaTuzI4Lhnka0ckAcAB2Kuy6btrsoY28S53ZRR0sltfnI1v2WD8xKsocsObJnSNqqDistCaYawwxFriXUFcKcpxA51VbVYLQRyp3noaOwBdmjWljrJUkkXak5mk78+iiu4qxais0rPg+r2cY9ClW5KKs5yUo1ywRVmQ3L3uKxC2HoUogAIW7EaVk4+/NWIOd7VoIxXVIMCtMgxVGWQYFtb4LWwUWTQgNzsarx25Y3ljVTcgzsz6SMP8wHXgrIqrGfnGfaafeFal34J+lnNX3QREXaYBERAEREAREQBU3WeICZxIzDT7qdyuSjNO6OMrKt89uLefeFlWhnhZGlOWWWpTQSOftHivTQ45rzEG7QgjNpwp4IXVxGB+MwvMaOw8kjXO+zgm6BV1K8BvPxsXWx2zb8ZHavNDUM1or9dlP6UZp2qkiUavk8U80LllsAGxWWZoUfpF5ZG9zaEtY5wrvDSRXmwVCUrkHLYcMvjnXDaLJRRNr1ptBy8m3g39RKhbXp+0nOU9AaOwLZQZv20idtcOCirUboiI9Ev9zg78y16Dtb3+VvuLvM84k08+tOoLo0FYDaRM1zy0stEgGFcC1gAzH1Ve1ikFkqan0+yHJSsZNKKEsINGitaACvAUUxEMFzmbM3YbVkwrXe3rKuHx09qEGxhXl/nCwbJgvH7gDs3dO3L44SiDY4/HUta9A6FiUB7VehYr0IDItWLxkl1YvOChkmBfRwOwEH3q3KkyHHj/lXGzPqxp3tB9y7sE90c1dbG1ERd5zhERAEREAREQBERAR+ldERzjHkvGTxmOY7xzKm6RsMsLqSD7Lx5p6d/MV9CWueFr2lrwHNOYKxqUVP3NIVHE+eskBwdTuWOgDWS0Gn0g/C0Mz+6pjSmr7ouVFV8e1ubm+I96rtjtYjmlD8GvLXMdswY1rm12OqCac/FedUpyjozrjJS2LFK7NR+kTWN7RjVjgN5JaVj+1h1aEHfQ9q5ZrVRYpF07FCdoS0EfwnDiWjtK0SasznO43i6v9oKuklpqeTyjuGJ9y1OsFqf5lnmP/jcB1kBbxzPZG0sXL7FX0dowwB5c5pvXcq7L2/iu7VVjWyT0rynNeRz4g06gpkan6Qf9Bd53vYOwkrZZ9TLVZKzzOiLSLl1jnFwJNQTVoFMKdKu6c7N2OZ1c0tyZsTsuKm4Dhgq9ZX8mqsUWWK5baljFyxJXrz8c1FjXsUAArc2tMFzcSvfKkZFSgdFFi4rndaQBiVpdbG7EB3VQuXALaFh+3t3hLMEleWLnBcrbQ44BjzwaT2BbGRTOyif0tI7aKyhJ+CLpGMrwDkrVox1YmfZ7MFAw6FmcauAaOc9wqrJBEGtDRsAHUu7C0pRbbRz1pJqyNiIi7TnCIiAIiIAiIgCIiAIiIAuG16HgkqXxNJOZHJJ6W0K7kUNJ7i9iJ/duy5eT/G/9S6YdEWduLYYwd90E9ZFV2ooUIrZE5mzxjQBQAAbgvURWICj9P2Ez2eSJpAc5vIJyD2kOZWmy8BXmUgihq6sEfILPFpJkoifYJKFwDnscHMbWlXVwqADsqrc2Ob1UnsnvVxRc0sJBmyryKh+xWg4CF3SWjvWwaFtTs/Jt4uPc0q1oiwlNB15FYGrkxzlYOAJ7wt8erX1pieDQO0lWBFosPTXgr1Z8kKzVmHaXu4up/aAtzNX7MPo68XOPaVKIrqnBeEVc5PycTdEWcfQx+w09oXTFA1vmta3gAOxbEVkktiLhERSQEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf/2Q==",
    title: "Construction Cement Bags (50kg)",
    price: "$6",
    condition: "New",
    location: "Sydney, Australia"
  },
  {
    id: 9,
    image: "https://plus.unsplash.com/premium_photo-1747132588492-87d5cfb4743f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGF3biUyME1vdmVyJTIwTWFjaGluZXxlbnwwfHwwfHx8MA%3D%3D",
    title: "Lawn Mower Machine",
    price: "$300",
    condition: "Used",
    location: "Rome, Italy"
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1742070122889-1505dd7a93b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Rm9ya2xpZnQlMjBNYWNoaW5lfGVufDB8fDB8fHww",
    title: "Forklift Machine",
    price: "$12,000",
    condition: "Used",
    location: "Shanghai, China"
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1758393605683-e28bb39d8917?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG95b3RhJTIwaGlsdXglMjAyMDE5fGVufDB8fDB8fHww",
    title: "Toyota Hilux 2019",
    price: "$25,000",
    condition: "Used",
    location: "Los Angeles, USA"
  },
  {
    id: 12,
    image: "data:image/jpeg;base64,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",
    title: "Honda BR-V 2021",
    price: "$29,500",
    condition: "New",
    location: "Munich, Germany"
  },
  {
    id: 13,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzLleR1w4wytIH6tGFS0rXiymXk8DquZXXrQ&s",
    title: "Industrial Welding Machine",
    price: "$550",
    condition: "New",
    location: "Amsterdam, Netherlands"
  },
  {
    id: 14,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrnPV-jTxdNEcCK5R3rPxmj8tWHoRzra6VPw&s",
    title: "Car Spare Parts Kit",
    price: "$75",
    condition: "Used",
    location: "Barcelona, Spain"
  },
  {
    id: 15,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmkxs_6FClmNNx0nMwU3MvZu6LU5klJmYmgQ&s",
    title: "Truck Tires 20 inch",
    price: "$180",
    condition: "Used",
    location: "Frankfurt, Germany"
  },
  {
    id: 16,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU_nbdM3Ov7ZLBMzrCV1G8OMT1xRrLFrCGLg&s",
    title: "Concrete Mixer Machine",
    price: "$750",
    condition: "New",
    location: "Singapore"
  },
  {
    id: 17,
    image: "https://cache4.pakwheels.com/ad_pictures/1355/tn_mercedes-benz-c-class-c180-2-2020-135522223.webp",
    title: "Mercedes Benz C-Class 2020",
    price: "$55,000",
    condition: "Used",
    location: "London, UK"
  },
  {
    id: 18,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeaMAAY9azQBzrh7ZYmfnxakkpHvJLYJfAGw&s",
    title: "Steel Beams (Set of 10)",
    price: "$1,200",
    condition: "New",
    location: "Tokyo, Japan"
  },
  {
    id: 19,
    image: "https://geepasofficial.com/cdn/shop/files/WhatsApp_Image_2025-05-17_at_11.20.42_PM.jpg?v=1747506143",
    title: "Drill Machine Set",
    price: "$205",
    condition: "New",
    location: "Paris, France"
  },
  {
    id: 20,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp_C3QKFHDb2Er57YNC6oxBJkOSoppaPiKcQ&s",
    title: "Mini Excavator Machine",
    price: "$18,000",
    condition: "Used",
    location: "Dubai, UAE"
  }
];


const scrollLeft = () => {
    sliderRef.current.scrollBy({left:-300 , behavior : 'smooth'})
}

const scrollRight = () => {
    sliderRef.current.scrollBy({left:300, behavior: "smooth"})
}


  return (
    <>
    
    <div className='flex justify-between p-2'>
      <div>
        <h2 className='text-2xl font-bold uppercase tracking-wider  '>Featured Products</h2>
    </div>
    <div className='hidden md:flex'>
      <button
      className=' px-5 py-2 m-2 bg-black text-white rounded hover:bg-gray-950 active:bg-gray-950 active:scale-95 cursor-pointer '
      onClick={scrollLeft}>Previous</button>
        <button
        className=' px-5 py-2 m-2 bg-black text-white rounded hover:bg-gray-950 active:bg-gray-950 active:scale-95 cursor-pointer '
        onClick={scrollRight}>Next</button>
    </div>
    
</div>
<div className='p-2'>
    <div
     ref={sliderRef}
    className='p-2 flex snap-x scrollbar-hide snap-mandatory overflow-x-auto'>
        {Products.map((product) => (

             <ProductCards key={product.id} product={product} />
        )
        )}
       
    </div>
</div>



    
    </>
  )
}

export default FeaturedProducts
