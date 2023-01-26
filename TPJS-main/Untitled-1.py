tableau =  [["","",""],["","",""],["","",""]]

def plop(tableauf) : 
  for i in tableauf:
    print (i)


var = plop(tableau)

print (var)


for i in range(9) :
  gnock = False
  while gnock==False :

    prout = int (input("Possition horizontal  pour X : "))
    flork = int (input("Position vertical pour X: "))  

    if tableau[flork][prout] =="":

      tableau[flork][prout] = "X"
      gnock = True

  plop(tableau)

  gnogni = False
  while gnogni==False :


    prout2 = int (input("Possition horizontal pour O : "))
    flork2 = int (input("Position vertical pour O : "))  

    if tableau[flork2][prout2] =="":
      tableau[flork2][prout2] = "O"
      gnogni=True

  plop(tableau)