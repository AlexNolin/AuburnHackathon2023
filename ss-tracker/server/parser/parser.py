import json
file1 = open('/Users/alexnolin/Desktop/HackAThon/Data/BrendaData.csv', 'r')
file = '/Users/alexnolin/Desktop/HackAThon/Data/BrendaData.csv'
allLines = []
Lines = file1.readlines()
for line in Lines:
        allLines.append(line.strip().split(','))
fields = allLines[0]

dict1 = {}

with open(file) as fh:
        iter1 = 1
        firstTime = 0
        for line in fh:
                if(firstTime == 1):
                        description = list(line.strip().split(","))
                        sno = 'shark' + str(iter1)
                        iter2 = 0
                        dict2 = {}
                        while iter2<len(fields):
                                dict2[fields[iter2]]= description[iter2]
                                iter2 = iter2 + 1
                        dict1[sno] = dict2
                        iter1 = iter1 +1
                firstTime = 1
                
out_file = open("/Users/alexnolin/Desktop/HackAThon/Data/BrendaResult.json", "w", encoding = 'utf-8-sig')
json.dump(dict1, out_file, indent = 0)
out_file.close()

