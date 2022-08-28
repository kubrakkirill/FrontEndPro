const colors = [`red`, `orange`, `yellow`, `green`, `blue`, `indigo`, `purple`]
let hero = ['Ivan'];
    native = ['York','Of'];
    destination = ['Poltava','In'];
    native.reverse()
    destination.shift()
    destination.push('Vain')
    hero.unshift('Richard')
    hero.pop()
    rainbow = hero.concat(native, destination)
    rainbow.splice(3,0,'Gave','Battle')
document.write(`<div style="display: flex">`)
for (let i=0;i<rainbow.length;i++){
    document.write(`<div style="display: flex; flex-direction: column;align-items: center; margin-left: 15px">
<div style="background: ${colors[i]}; width: 20px; height: 20px; border-radius: 50%"></div>
<span>${rainbow[i]}</span>
</div>`)
}
document.write(`</div>`)
