// fetch JSON data from list_of_ancestors.json
const getData = async () => {
    const ancestorsResponse = await fetch("https://raw.githubusercontent.com/Wilfred2u/deploys/main/static/list_of_ancestors.json");
    const marriagesResponse = await fetch("https://raw.githubusercontent.com/Wilfred2u/deploys/main/static/list_of_marriages.json");
    const ancestorsData = await ancestorsResponse.json();
    const marriagesData = await marriagesResponse.json();
    const data = [ancestorsData, marriagesData]
    return data;
};

// turn the JSON data into a family tree structure
getData()
    .then(data => {
        const family_tree = generations => {
            const list = document.getElementById('ancestors_list');

            let marrNode
            let husband, husbNameItem, husbProfItem, husbBirthItem, husbDeathItem, husbNameNode, husbprofNode, husbBirthNode, husbDeathNode
            let wife, wifeNameItem, wifeProfItem, wifeBirthItem, wifeDeathItem, wifeNameNode, wifeProfNode, wifeBirthNode, wifeDeathNode

            for (let x = generations; x > 0; x--) {
                const generation = document.createElement('div')
                generation.setAttribute("class", "generation")

                for (let i = (2 ** (x - 1)); i <= (2 ** x) - 1; i++) {

                    const section = document.createElement('section');

                    const couplePart = document.createElement('div');
                    couplePart.setAttribute("class", "couple");

                    const marriagePart = document.createElement('div')
                    marriagePart.setAttribute("class", "marriage");

                    data[1][i].marriage_place && data[1][i].marriage_date ?
                        marrNode = document.createTextNode(data[1][i].marriage_place + ", " + data[1][i].marriage_date) :
                        marrNode = document.createTextNode("?, ?")

                    for (let person = 1; person <= data[1].length * 2; person++) {
                        husband = document.createElement('div');
                        husband.setAttribute("class", "husband");

                        husbNameItem = document.createElement('p');
                        husbProfItem = document.createElement('p');
                        husbBirthItem = document.createElement('p');
                        husbDeathItem = document.createElement('p');

                        husbNameNode = document.createTextNode(data[0][(i * 2) - 1].first_name + " " + data[0][(i * 2) - 1].last_name + " ");
                        husbprofNode = document.createTextNode(data[0][(i * 2) - 1].profession);

                        data[0][(i * 2) - 1].birth_date && data[0][(i * 2) - 1].birth_place ?
                            husbBirthNode = document.createTextNode(data[0][(i * 2) - 1].birth_place + ", " + data[0][(i * 2) - 1].birth_date) :
                            data[0][(i * 2) - 1].baptize_date && data[0][(i * 2) - 1].baptize_place ?
                                husbBirthNode = document.createTextNode(data[0][(i * 2) - 1].baptize_place + ", " + data[0][(i * 2) - 1].baptize_date) :
                                data[0][(i * 2) - 1].birth_date == "" && data[0][(i * 2) - 1].birth_place && data[0][(i * 2) - 1].baptize_date == "" && data[0][(i * 2) - 1].baptize_place == "" ?
                                    husbBirthNode = document.createTextNode(data[0][(i * 2) - 1].birth_place + ", ?") :
                                    husbBirthNode = document.createTextNode("")

                        data[0][(i * 2) - 1].death_date ?
                            husbDeathNode = document.createTextNode(data[0][(i * 2) - 1].death_place + ", " + data[0][(i * 2) - 1].death_date) :
                            data[0][(i * 2) - 1].death_date == "" && data[0][(i * 2) - 1].death_place ?
                                husbDeathNode = document.createTextNode(data[0][(i * 2) - 1].death_place + ", ?") :
                                husbDeathNode = document.createTextNode("");

                        wife = document.createElement('div');
                        wife.setAttribute("class", "wife");

                        wifeNameItem = document.createElement('p');
                        wifeProfItem = document.createElement('p');
                        wifeBirthItem = document.createElement('p');
                        wifeDeathItem = document.createElement('p');

                        wifeNameNode = document.createTextNode(data[0][i * 2].first_name + " " + data[0][i * 2].last_name + " ");
                        wifeProfNode = document.createTextNode(data[0][i * 2].profession);

                        data[0][(i * 2) - 1].birth_date && data[0][i * 2].birth_place ?
                            wifeBirthNode = document.createTextNode(data[0][i * 2].birth_place + ", " + data[0][i * 2].birth_date) :
                            data[0][(i * 2) - 1].baptize_date && data[0][i * 2].baptize_place ?
                                wifeBirthNode = document.createTextNode(data[0][i * 2].baptize_place + ", " + data[0][i * 2].baptize_date) :
                                data[0][(i * 2) - 1].birth_date == "" && data[0][i * 2].birth_place && data[0][i * 2].baptize_date == "" && data[0][i * 2].baptize_place == "" ?
                                    wifeBirthNode = document.createTextNode(data[0][i * 2].birth_place + ", ?") :
                                    wifeBirthNode = document.createTextNode("")

                        data[0][i * 2].death_date ?
                            wifeDeathNode = document.createTextNode(data[0][i * 2].death_place + ", " + data[0][i * 2].death_date) :
                            data[0][i * 2].death_date == "" && data[0][i * 2].death_place ?
                                wifeDeathNode = document.createTextNode(data[0][i * 2].death_place + ", ?") :
                                wifeDeathNode = document.createTextNode("");
                    };

                    husbNameItem.appendChild(husbNameNode);
                    husbProfItem.appendChild(husbprofNode);
                    husbBirthItem.appendChild(husbBirthNode);
                    husbDeathItem.appendChild(husbDeathNode);

                    husband.appendChild(husbNameItem);
                    husband.appendChild(husbProfItem);
                    husband.appendChild(husbBirthItem);
                    husband.appendChild(husbDeathItem);

                    couplePart.appendChild(husband);

                    wifeNameItem.appendChild(wifeNameNode);
                    wifeProfItem.appendChild(wifeProfNode);
                    wifeBirthItem.appendChild(wifeBirthNode);
                    wifeDeathItem.appendChild(wifeDeathNode);

                    wife.appendChild(wifeNameItem);
                    wife.appendChild(wifeProfItem);
                    wife.appendChild(wifeBirthItem);
                    wife.appendChild(wifeDeathItem);

                    couplePart.appendChild(wife);

                    marriagePart.appendChild(marrNode);

                    section.appendChild(couplePart);
                    section.appendChild(marriagePart);

                    generation.appendChild(section);
                }
                list.appendChild(generation);
            }
        }
        family_tree(7)
    })

    .catch(err => console.log("error " + err.message));