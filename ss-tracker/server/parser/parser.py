import json
sharkName = 'Brenda'
file1 = open('/Users/alexnolin/Desktop/HackAThon/Data/' + sharkName +'Data.csv', 'r')
file = '/Users/alexnolin/Desktop/HackAThon/Data/' + sharkName +'Data.csv'
allLines = []
Lines = file1.readlines()
for line in Lines:
        allLines.append(line.strip().lstrip('\ufeff').split(','))
fields = allLines[0]

print(sharkName)

with open(file) as fh:
        iter1 = 1
        time = 0
        for line in fh:
                dict1 = {}
                if(time > 0 and time < 21):
                        description = list(line.strip().split(","))
                        sno = sharkName.lower() + str(iter1)
                        iter2 = 0
                        dict2 = {}
                        while iter2<len(fields):
                                dict2[fields[iter2]]= description[iter2]
                                iter2 = iter2 + 1
                        dict1[sno] = dict2
                        out_file = open("/Users/alexnolin/Desktop/Data1/" + sharkName +"/" + sharkName + "Result" + str(iter1) + ".json", "w", encoding = 'utf-8-sig')
                        json.dump(dict1, out_file, indent = 0)
                        iter1 = iter1 +1
                        out_file.close()
                time += 1
                
