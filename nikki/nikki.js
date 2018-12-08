var nikkiObject = {
    firstName: "Nikki",
lastName: "Ash",
favoriteFoods: ["Pizza", "Tacos"],
firstJob: "Telemarketer",
dreamJob: "programmer",
greatestFear: "spiders",
homeTown: "South Point, Ohio",
secretTalents: ["photography", "writing"],
wouldSkyDive: "Yes",
petInfo: {
   type: "cat",
   name: "Andy aka Beans"
}
    }

var HTMLstring =`<h1>${nikkiObject.firstName} ${nikkiObject.lastName}</h1>
<ul>Nikki's favorite foods are:<li>${nikkiObject.favoriteFoods[0]}</li><li>${nikkiObject.favoriteFoods[1]}</li></ul><p>Nikki's first job was a ${nikkiObject.firstJob}.</p><p>Nikki's dream job is to be a ${nikkiObject.dreamJob}.</p><p>Her greatest fear is ${nikkiObject.greatestFear}.</p><p>She hails from ${nikkiObject.homeTown}.</p><p>Nikki's secret talents are ${nikkiObject.secretTalents[0]} and ${nikkiObject.secretTalents[1]}.</p><p> Will Nikki skydive? ${nikkiObject.wouldSkyDive}.</p>She has a ${nikkiObject.petInfo.type} named ${nikkiObject.petInfo.name}.</p>`

document.querySelector("#personal-website").innerHTML = HTMLstring