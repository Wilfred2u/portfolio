import json

# turn file into list
with open("./Grootoonk_(public).ged") as infile:
    text = [line.rstrip() for line in infile]

lines = [line for line in text]

# redefine months
months = {
    "JAN": "januari",
    "FEB": "februari",
    "MAR": "maart",
    "APR": "april",
    "MAY": "mei",
    "JUN": "juni",
    "JUL": "juli",
    "AUG": "augustus",
    "SEP": "september",
    "OCT": "oktober",
    "NOV": "november",
    "DEC": "december",
}

def data_item_known_date(line_1, line_2, delta):
    # data_item = birth_date
    if lines[i + 1][:6] == "1 NAME":
        max_length = 1
        while max_length < 50:
            if lines[i + max_length + 1][:6] == "1 NAME":
                break
            max_length += 1
            k = 1
            while k < max_length:
                if lines[i + k + 1] == line_1 and lines[i + k + delta][:6] == line_2:
                    data_item = lines[i + k + delta][7:]
                    break
                k += 1
            else:
                data_item = ""
        return data_item


def data_item_unknown_date(line_1, line_2, delta_1, delta_2, sign):
    if lines[i + 1][:6] == "1 NAME":
        max_length = 1
        while max_length < 50:
            if lines[i + max_length + 1][:6] == "1 NAME":
                break
            max_length += 1
            k = 1
            while k < max_length:
                if lines[i + k + 1] == line_1 and lines[i + k + delta_1][:6] == line_2:
                    data_item = sign + lines[i + k + delta_1][7:]
                    break
                elif (
                    lines[i + k + 1] == line_1 and lines[i + k + delta_2][:6] == line_2
                ):
                    data_item = sign + lines[i + k + delta_2][7:]
                    break
                k += 1
            else:
                data_item = ""
        return data_item


ancestors_list = []

i = 0
while i < len(lines):
    # define reference number
    if lines[i][:6] == "1 REFN":
        ref = lines[i][7:]

        # define first name and last name
        if lines[i + 1][:6] == "1 NAME":
            name = lines[i + 1][7:-1]
            full_name = name.split("/")
            first_name = full_name[0]
            last_name = full_name[1]

        # define gender
        if lines[i + 2] == "1 SEX M":
            sex = "male"
        else:
            sex = "female"

        # define profession
        all_professions = []
        if lines[i + 1][:6] == "1 NAME":
            max_length = 1
            while max_length < 50:
                if lines[i + max_length + 1][:6] == "1 NAME":
                    break
                max_length += 1
            k = 1
            while k < max_length:
                if lines[i + k + 1][:6] == "1 OCCU":
                    profession = lines[i + k + 1][7:]
                    if (
                        profession != "zonder beroep"
                        and profession != "zonder speciaal beroep"
                    ):
                        all_professions.append(f" {profession}")
                k += 1

            professions = []
            [
                professions.append(prof)
                for prof in all_professions
                if prof not in professions
            ]

        # define birth date
        birth_date = data_item_known_date("1 BIRT", "2 DATE", 2)
        if birth_date[:3] == "ABT":
            birth_date = birth_date.replace("ABT", "ca.")

        # define birth place
        birth_place = data_item_unknown_date("1 BIRT", "2 PLAC", 2, 3, "* ")

        # define baptize date
        baptize_date = data_item_known_date("1 CHR", "2 DATE", 2)

        # define baptize place
        baptize_place = data_item_unknown_date("1 CHR", "2 PLAC", 2, 3, "~ ")

        # define death date
        death_date = data_item_known_date("1 DEAT", "2 DATE", 2)
        if death_date[:3] == "BEF":
            death_date = death_date.replace("BEF", "vóór")

        # define death place
        death_place = data_item_unknown_date("1 DEAT", "2 PLAC", 2, 3, "\u2020 ")

        # format dates
        for month in months.keys():
            birth_date = birth_date.replace(month, months[month])
            baptize_date = baptize_date.replace(month, months[month])
            death_date = death_date.replace(month, months[month])

        # concatenate all information
        person = {
            "id": ref,
            "sex": sex,
            "first_name": first_name,
            "last_name": last_name,
            "profession": professions,
            "birth_date": birth_date,
            "birth_place": birth_place,
            "baptize_date": baptize_date,
            "baptize_place": baptize_place,
            "death_date": death_date,
            "death_place": death_place,
        }

        # append person to the list
        ancestors_list.append(person)
    i += 1

list_of_ancestors = []
count = 1

# make list of ancestors
while len(list_of_ancestors) < 255:
    for ancestor in ancestors_list:
        if int(list(ancestor.values())[0]) == count:
            list_of_ancestors.append(ancestor)
            count += 1

list_of_marriages = [{"id": 1, "marriage_date": "", "marriage_place": ""}]

number = 1
while number < len(ancestors_list) - 1:
    i = 1
    while i < len(lines) - 4:
        # define Aldfaer's ID
        if lines[i] == "1 REFN " + str(number):
            id = lines[i - 2][2:-5]

            j = 1
            # define maximum length between 2 husbandss
            while j < len(lines):
                if lines[j] == "1 HUSB " + str(id):
                    max_length = 1
                    while max_length < 8:
                        if lines[j + max_length][:6] == "1 HUSB":
                            break
                        max_length += 1
                        k = 1

                        # define marriage place and date
                        while k < max_length:
                            if lines[j + k] == "1 MARR":
                                if lines[j + k + 2][:6] == "2 DATE":
                                    marriage_date = lines[j + k + 2][7:]
                                else:
                                    marriage_date = ""
                                if lines[j + k + 3][:6] == "2 PLAC":
                                    marriage_place = lines[j + k + 3][7:]
                                else:
                                    marriage_place = ""

                                # format dates
                                for month in months.keys():
                                    marriage_date = marriage_date.replace(
                                        month, months[month]
                                    )

                                marriage = {
                                    "id": int(number / 2) + 1,
                                    "marriage_date": marriage_date,
                                    "marriage_place": marriage_place,
                                }

                            k += 1
                    list_of_marriages.append(marriage)
                j += 1
        i += 1
    number += 1

list_of_marriages.append({"id": 128, "marriage_date": "", "marriage_place": ""})

# convert to json
list_of_ancestors_json = json.dumps(list_of_ancestors, indent=4)
list_of_marriages_json = json.dumps(list_of_marriages, indent=4)

# writing to list_of_ancestors.json
with open("list_of_ancestors.json", "w") as outfile_ancestors:
    outfile_ancestors.write(list_of_ancestors_json)

# writing to list_of_ancestors.json
with open("list_of_marriages.json", "w") as outfile_marriages:
    outfile_marriages.write(list_of_marriages_json)
