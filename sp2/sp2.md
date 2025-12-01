# 🌀  Sprint 2: Instal·lació · Configuració de Programari de Base · Gestió de Fitxers

---

##  1. Sistemes de fitxers i particions

###  Mida sector
És la unitat mínima **física** on es guarden les dades en un disc.  
Per defecte, la mida del sector és de **512 bytes** i **no es pot modificar**.
<img width="577" height="143" alt="2025-10-27_12-23" src="https://github.com/user-attachments/assets/381a5cd7-0159-46f2-8f6b-565ebeeb7c87" />

---

###  Mida block o clúster
És la unitat mínima **lògica** on es guarden les dades a nivell de sistema operatiu.  
Per defecte, la mida és de **4096 bytes (8 sectors)** i **sí que es pot modificar** quan es formateja la partició.  
Cada partició del disc pot tenir una mida de bloc i un sistema de fitxers diferent.
<img width="532" height="77" alt="2025-10-27_12-26" src="https://github.com/user-attachments/assets/c3cd11b5-e62e-44d9-96b6-3a4d8cc76af6" />

---

###  Fragmentació interna
Es produeix quan els blocs són massa grans per al que es vol guardar i s’acaba desaprofitant espai al disc.

---

###  Fragmentació externa
Es produeix quan un fitxer no està guardat en blocs consecutius de la memòria.  
Això provoca que els accessos siguin més lents i, per tant, **baixa el rendiment**.
<img width="1064" height="392" alt="2025-10-27_13-24" src="https://github.com/user-attachments/assets/f9166ef2-485d-467c-adfd-0f533422bdf8" />

---

###  Sistemes de fitxers
N’hi ha de molts tipus, cadascun optimitzat per a diferents usos, i cada sistema té unes limitacions.

- **Windows:** `NTFS`, `FAT32`
<img width="493" height="113" alt="2025-10-27_12-55" src="https://github.com/user-attachments/assets/70c5ead5-c84c-428b-b58d-d54629b2836c" />

- **Ubuntu:** `ext4`
<img width="823" height="265" alt="2025-10-27_12-54" src="https://github.com/user-attachments/assets/ed33e9f5-8e01-4831-8209-7aa8d246bed1" />

---

### Tipus de formateig
- **Baix nivell:**  
  Esborra arxius i el sistema de fitxers. Intenta reparar sectors defectuosos, però requereix programes específics i **no es pot fer mitjançant el SO**.
  
- **Mig nivell:**  
  Igual que el d’alt nivell però **marca els sectors defectuosos** si n’hi ha.
  
- **Alt nivell:**  
  No esborra els arxius, només el sistema de fitxers. Si troba sectors defectuosos, **els ignora**.

---

###  Partició
Una partició és un tros físic del disc dur.  
Amb **GPARTED** podem gestionar particions, però **no podem modificar la mida de bloc**.


---

###  Volum
És una capa d’abstracció que es posa damunt de les particions i/o discos.

---

###  Gestió de particions
- **Eina gràfica:** `GPARTED`
 <img width="1243" height="244" alt="2025-10-27_12-36" src="https://github.com/user-attachments/assets/832f7258-3af8-4cb4-a559-4942504ba47f" />

- **Comandes:** eines CLI per gestionar particions
Particions
<img width="568" height="83" alt="2025-10-27_12-52" src="https://github.com/user-attachments/assets/e914d13f-6a1b-4833-8b82-0b052c1f91bc" />

Mida de les particions
<img width="1092" height="331" alt="2025-10-27_12-57" src="https://github.com/user-attachments/assets/e00a9897-4b87-4b03-a3f9-daa2722c189f" />

Crearem la carpeta p1 i montem la partició de disc `/dev/sdb1` al directori `/mnt/p1`
<img width="486" height="268" alt="2025-10-27_13-10" src="https://github.com/user-attachments/assets/6af3f719-28e2-4441-8e55-79628e69e97b" />

Crearem la carpeta **hhh**, dins de la carpeta `mnt/p1`

<img width="286" height="80" alt="2025-10-27_13-11" src="https://github.com/user-attachments/assets/faa8075c-ff23-4c22-aafa-1e09dc14321c" />
<br>
Afegim la partició `/dev/sdb1` al fitxer `/etc/fstab` per muntar-la automàticament com a **ext4** al punt `/mnt/p1` cada vegada que el sistema s'engegui
<img width="968" height="264" alt="2025-10-27_13-16" src="https://github.com/user-attachments/assets/b2144a34-d388-4b85-866e-160bb21e7c00" />


---

##  2. Gestió de processos

1. Configuració Prèvia i Arxius del Sistema
Abans de començar amb la creació d'usuaris, vam fer una revisió dels principals fitxers de configuració per entendre on s'emmagatzema la informació al sistema.

1.1. Revisió de l'Entorn Gràfic
Primerament, vam comprovar l'estat dels usuaris des de la interfície gràfica per veure les opcions disponibles i confirmar l'existència de l'usuari alumne.

<img width="681" height="433" alt="2025-11-04_12-50 1" src="https://github.com/user-attachments/assets/b2b1fa10-7bdc-482a-a2c1-193a37951aff" />


1.2. Funció del Fitxer /etc/passwd
Anirem a mirar el fitxer /etc/passwd, que és fonamental perquè conté la llista de tots els usuaris del sistema. Per a cada usuari, ens indica el nom, l'identificador d'usuari (UID), l'identificador de grup primari (GID), el directori personal i la shell que s'executarà en iniciar la sessió.

<img width="979" height="827" alt="2025-11-04_12-54" src="https://github.com/user-attachments/assets/7b216bb5-39e4-4241-aa7c-c87ca075035e" />


1.3. Funció del Fitxer /etc/shadow
Aquest fitxer és crític per a la seguretat. Vam comprovar el seu contingut, sabent que guarda els hashes (contrasenyes xifrades) dels usuaris i la informació sobre l'antiguitat i caducitat de les contrasenyes. Només l'usuari root té permís per llegir-lo.

<img width="954" height="655" alt="2025-11-04_12-56" src="https://github.com/user-attachments/assets/efff3cb9-ccd6-4297-a19c-48148405162b" />

1.4. Funció del Fitxer /etc/group
Hem examinat el fitxer /etc/group, que serveix per definir tots els grups existents al sistema i llistar quins usuaris pertanyen a cada grup secundari.

<img width="962" height="781" alt="2025-11-04_12-57" src="https://github.com/user-attachments/assets/9a6ae4c1-287a-4903-b58b-c95c8958d650" />

1.5. Funció del Fitxer /etc/gshadow
Finalment, vam revisar /etc/gshadow, que és l'equivalent segur de /etc/group. Aquest fitxer s'utilitza per guardar contrasenyes xifrades per a grups, en cas que un grup sigui protegit amb contrasenya, i gestiona els administradors de cada grup.

<img width="963" height="832" alt="2025-11-04_12-59" src="https://github.com/user-attachments/assets/d4605757-368c-4e3a-9cf0-95a9d98fca1a" />
---

##  3. Gestió d'usuaris i grups i permisos

2. Creació i Gestió de l'Usuari gina
Ara anirem a crear l'usuari gina utilitzant la comanda adduser, que és l'eina més senzilla, ja que automatitza molts passos.

2.1. Creació amb adduser i Assignació de Contrasenya
Hem executat adduser gina. El procés ens ha creat l'usuari, el grup primari i ens ha demanat la contrasenya. Vam comprovar que el sistema ens avisa si la contrasenya és massa curta.

<img width="733" height="330" alt="2025-11-04_13-02" src="https://github.com/user-attachments/assets/2b707da1-8fac-4c38-826f-9513457a0eb8" />


2.2. Verificació del Directori Personal
Vam verificar que la comanda adduser va crear automàticament el directori /home/gina amb la seva estructura interna per defecte.

<img width="842" height="170" alt="2025-11-04_13-06" src="https://github.com/user-attachments/assets/11ecea31-d0c4-4624-b41b-a3532cfd7ee9" />


3. Creació i Configuració Avançada de l'Usuari gina2
Per demostrar un mètode més manual, vam crear l'usuari gina2 amb useradd i vam haver de configurar el seu entorn després.

Accions que vam dur a terme:

Crear l'usuari (useradd).

Establir la contrasenya (passwd).

Modificar la shell d'inici de sessió a /bin/bash (usermod -s).

Crear el directori personal manualment (mkdir).

Canviar el propietari del directori de root a gina2 (chown).

<img width="661" height="376" alt="2025-11-04_13-12" src="https://github.com/user-attachments/assets/0653e90f-21a2-4a0d-b048-da5686c35161" />

3.1. Bloqueig i Desbloqueig d'Usuaris (Gestió Fina de gina)
Un cop l'usuari gina estava operatiu, vam demostrar com podem bloquejar un compte temporalment, evitant que ningú hi pugui iniciar sessió sense necessitat d'eliminar l'usuari.

3.2. Bloqueig (usermod -L) i Desbloqueig (usermod -U)
Què fa el bloqueig? Vam utilitzar usermod amb l'opció -L (Lock). Vam comprovar amb grep que el sistema afegeix un signe d'admiració (!) al principi del hash de la contrasenya al fitxer /etc/shadow, invalidant-la.

Què fa el desbloqueig? Després vam utilitzar l'opció -U (Unlock) de usermod, que elimina el signe d'admiració i restaura la funcionalitat de la contrasenya.

<img width="898" height="315" alt="2025-11-04_13-31" src="https://github.com/user-attachments/assets/bbf145ef-a7fd-490c-8ec3-fa787b4f2be1" />


3.3 Eliminació d'Usuaris
Finalitzades les proves, vam procedir a l'eliminació dels usuaris gina i gina2 utilitzant els mètodes habituals.

3.4. Eliminació de l'Usuari gina amb deluser
Vam eliminar gina amb deluser, que és la comanda recomanada per a sistemes Debian/Ubuntu. Aquesta comanda s'encarrega de netejar les referències al grup primari de l'usuari si no té més membres.

3.5. Eliminació de l'Usuari gina2 amb userdel -r
Vam eliminar gina2 amb userdel utilitzant l'opció -r (remove home directory) per esborrar també el seu directori personal. Vam utilitzar aquesta comanda ja que gina2 va ser creat amb el mètode useradd (més manual).

<img width="586" height="210" alt="2025-11-04_13-26" src="https://github.com/user-attachments/assets/d5501c1f-98de-491e-b8a0-259df08364a6" />


4. Gestió de Grups Secundaris
Vam practicar l'addició i eliminació d'usuaris a grups secundaris, utilitzant el grup users com a exemple.

<img width="514" height="359" alt="2025-11-04_13-20" src="https://github.com/user-attachments/assets/a727b3ad-84ac-4f36-a337-a14782b1c663" />


5. Assignació de Permisos de sudo
Finalment, vam gestionar l'accés a privilegis d'administrador per a gina afegint-lo al grup sudo.

5.1. Comprovació (Sense Permís)
Vam provar d'executar una comanda administrativa (apt update) com a gina. Vam veure que el sistema ens va denegar l'accés perquè l'usuari no estava al fitxer sudoers.

5.2. Assignació i Comprovació (Amb Permís)
Com a root, vam afegir gina al grup sudo. Després, vam tornar a intentar la comanda i vam comprovar que l'actualització es va executar correctament després d'introduir la contrasenya.

<img width="772" height="405" alt="2025-11-04_13-22" src="https://github.com/user-attachments/assets/abf006f8-026e-4df5-b39b-01a2f03e5839" />

6. Creació d'Usuaris i Manipulació de Grups (Escenari de Proves)
Per demostrar la gestió de grups més enllà de les funcions bàsiques, vam crear un nou escenari amb diversos usuaris i grups per practicar la modificació i eliminació d'aquests elements.

6.1. Creació del Grup asixb i Usuaris ivan i iker
Primer de tot, vam crear el grup asixb amb la comanda addgroup. Després, vam utilitzar adduser per crear els usuaris ivan i iker.

<img width="578" height="762" alt="2025-11-04_13-33" src="https://github.com/user-attachments/assets/5ff0b643-b5c4-43a7-b7a1-99ac7ed2f010" />

6.2. Creació dels Usuaris pau i aaron
Vam afegir dos usuaris més al nostre escenari de proves per poder demostrar diferents combinacions de pertinença a grups.

<img width="590" height="670" alt="2025-11-04_13-33_1" src="https://github.com/user-attachments/assets/f44b295a-dcd9-4c78-9b33-c98ae12a6363" />

6.3. Canvi de Nom i Eliminació del Grup asixb
Per practicar la modificació de grups, vam canviar el nom de asixb a asix amb la comanda groupmod -n. Després, vam eliminar el grup utilitzant groupdel.

Què fa groupmod -n? Modifica el nom d'un grup sense afectar el GID ni els usuaris que en són membres.

<img width="414" height="121" alt="2025-11-04_13-34" src="https://github.com/user-attachments/assets/c79f92af-6c2d-4041-a048-1322931fa27a" />

6.4. Canvi de Nom de Grup
Vam fer un altre exemple de canvi de nom per consolidar el coneixement, canviant el grup parchis a dames.

<img width="460" height="40" alt="2025-11-17_11-54" src="https://github.com/user-attachments/assets/417748f9-65fe-479a-9916-967450392b5b" />

6.5. Verificació de Nous Usuaris (Usuaris de Colors)
Vam comprovar que els usuaris amb noms de colors (blau, roig, groc i verd) s'havien creat correctament, observant les últimes línies del fitxer /etc/passwd. Això ens permet veure els seus UID i GID assignats.

<img width="467" height="99" alt="2025-11-17_11-52" src="https://github.com/user-attachments/assets/9a34e636-24c2-466f-b90e-9ea6fa5584a3" />


7. Gestió Avançada de Membres de Grups
Vam demostrar diferents maneres d'afegir i treure usuaris d'un grup existent, utilitzant eines especialitzades per a la gestió de membres.

7.1. Mètodes per Afegir Usuaris a Grups Secundaris
Per a un grup de prova (asix1r), vam afegir tres usuaris (ivan, pau, iker) utilitzant tres comandes diferents, ja que cada una té un ús lleugerament diferent.

<img width="493" height="269" alt="2025-11-04_13-38" src="https://github.com/user-attachments/assets/74cd3e68-ac50-44b4-8dc8-af23d4a7c041" />

7.2. Administració i Gestió de Membres amb gpasswd
Vam utilitzar gpasswd per demostrar com podem assignar administradors de grup i com intentaríem eliminar-ne els membres.

Què fa gpasswd -A? Afegeix un usuari com a administrador del grup.

Vam afegir aaron com a administrador de asix1r i vam comprovar la modificació al fitxer /etc/gshadow, que és on es guarden aquests permisos.

<img width="449" height="168" alt="2025-11-04_13-45" src="https://github.com/user-attachments/assets/4a58a9fd-9102-43d5-bacc-9769ee1735a6" />

7.3. Mètodes per Eliminar Usuaris de Grups
Vam fer servir el grup parchis (amb membres roig, verd i groc) per demostrar les dues comandes principals per treure membres d'un grup:

<img width="506" height="486" alt="2025-11-17_11-58" src="https://github.com/user-attachments/assets/9b980022-6dc5-4793-8d36-75d48321e755" />

8. Preparo la Plantilla d'Usuari (/etc/skel)
Primer de tot, entro al directori esquelètic (/etc/skel), que és la plantilla per als nous usuaris. Jo vull que, per defecte, tinguin alguna cosa més que els fitxers bàsics.

He creat una carpeta nova que he anomenat prova (mkdir prova).

He creat un fitxer buit que es diu hola (touch hola).

D'aquesta manera, qualsevol usuari nou que creï a partir d'ara tindrà aquests dos elements al seu directori personal.

<img width="556" height="389" alt="2025-11-17_12-07" src="https://github.com/user-attachments/assets/bf2d5117-24ac-4bdd-aef0-2626b3f4564d" />


9. Definim els Paràmetres Generals (/etc/adduser.conf)
Després, vaig a configurar com s'han de crear els usuaris amb l'eina adduser. He editat el fitxer /etc/adduser.conf i he fet tres canvis clau:

Canvio la ubicació dels Home Directories: He canviat DHOME de l'estàndard /home a /var. Això vol dir que els directoris personals aniran a /var/nom_usuari.

Canvio els UIDs/GIDs: Vull que els nous usuaris i els seus grups comencin a partir del 3000; per això he definit FIRST_UID=3000 i FIRST_GID=3000.

<img width="1009" height="798" alt="2025-11-17_12-12" src="https://github.com/user-attachments/assets/86158f90-c0f6-4b55-a6d8-3c8af8ee4c84" />

10. Definim les Regles de Seguretat (/etc/login.defs)
Per motius de seguretat, he definit una política de contrasenyes global. A /etc/login.defs, he establert aquestes regles:

Validesa Màxima: He posat PASS_MAX_DAYS 20. Les contrasenyes caducaran als 20 dies.

Interval Mínim: He posat PASS_MIN_DAYS 15. Caldrà esperar 15 dies entre canvi i canvi de contrasenya.

Avisos: He definit PASS_WARN_AGE 3. L'usuari rebrà un avís 3 dies abans que la contrasenya caduqui.

<img width="1001" height="394" alt="2025-11-17_12-14" src="https://github.com/user-attachments/assets/412d831a-7cb8-4135-bf0f-893a658e5cb5" />

11. M'Asseguro que la Shell sigui Bash (/etc/default/useradd)
Com que l'eina useradd és de baix nivell i a vegades utilitza una shell més simple (/bin/sh), he editat /etc/default/useradd i he canviat SHELL a /bin/bash. Així m'asseguro que qualsevol usuari, independentment de com es creï, utilitzi Bash.

<img width="1014" height="183" alt="2025-11-17_12-20" src="https://github.com/user-attachments/assets/9a080546-9a92-4686-973d-eab831bc068c" />


12. Poso a Prova la Configuració (Usuari negre)
He creat l'usuari negre utilitzant la comanda useradd negre. Després he comprovat el resultat:

He vist que se li ha assignat l'UID 3001 (el següent al 3000).

He comprovat que la seva shell és /bin/bash (gràcies al canvi que he fet a l'apartat 11).

<img width="1014" height="183" alt="2025-11-17_12-20" src="https://github.com/user-attachments/assets/0d51493e-9fb2-4c1c-b0c0-a9363df835b7" />

13. Verifico que Tot Funcioni (Usuari gris)
Aquest és el pas on es veu que la configuració global ha funcionat correctament. Després de crear l'usuari gris (que ha agafat l'UID 3000, el primer disponible):

Comprovo el seu perfil: Veig que l'usuari gris té l'UID/GID 3000 i el seu directori personal està correctament a /var/gris (tal com volia a l'apartat 9).

Comprovo la seguretat: A /etc/shadow, confirmo que les regles de caducitat (15 dies mínim, 20 dies màxim, 3 dies d'avís) s'han aplicat correctament.

Comprovo la plantilla: Quan llisto el contingut de /var/gris, veig els fitxers de sessió (com .bashrc) i, molt important, la carpeta prova i el fitxer hola que vaig posar a la plantilla a l'apartat 8. 

<img width="880" height="356" alt="2025-11-17_12-19" src="https://github.com/user-attachments/assets/1455cbbf-9b9a-42d8-bada-3948dc3a4903" />

14. Personalitzo l'Inici de Sessió (.profile)
Ara torno a la plantilla (/etc/skel) per afegir més personalització. He editat el fitxer .profile i hi he afegit la línia PWD="/var/$USER". Amb això intento assegurar-me que, quan un usuari faci login, estigui ben situat al seu directori a /var.

<img width="955" height="514" alt="2025-11-17_12-27" src="https://github.com/user-attachments/assets/03c52410-00c5-4654-a88d-7198eb4be395" />


15. Afegeixo un Àlies (.bashrc)
Després, he editat el fitxer .bashrc de la plantilla. Aquí he creat un àlies, que és una drecera de comanda:

He afegit: alias connexio='ls -la'

Això vol dir que tots els nous usuaris podran escriure connexio en lloc de la comanda més llarga ls -la.

<img width="960" height="95" alt="2025-11-17_12-30" src="https://github.com/user-attachments/assets/5b30f022-4018-430c-94b3-1267fd5a3a0e" />

16. Configuro la Neteja Automàtica (.bash_logout)
I l'últim canvi és la neteja automàtica. He editat el fitxer .bash_logout (el que s'executa quan tanques la sessió) i he afegit una comanda forta:

He afegit: rm -r /var/"$USER"/*

Amb això, tot el contingut del directori personal de l'usuari s'esborrarà automàticament cada vegada que tanquin la sessió. Així, el seu espai de treball serà sempre temporal.

<img width="986" height="161" alt="2025-11-17_12-32" src="https://github.com/user-attachments/assets/531f6554-8c84-4d5f-aef1-57885ab058f7" />

17. Verificació d'Inici de Sessió
He comprovat que l'usuària rosa pot fer login sense problemes i llistar el contingut del seu directori. Aquesta acció confirma que l'usuari s'ha creat correctament.

<img width="643" height="397" alt="2025-11-17_12-36" src="https://github.com/user-attachments/assets/4462da4f-a887-4963-8622-5021bb491318" />

18. Prova de Permisos Compartits
He creat el directori palomes/ i he aplicat els permisos rwxr-xr-- per fer un test de seguretat. He verificat que:

El propietari (nick) hi pot escriure i esborrar.

El membre del grup (cire) només pot entrar i llegir.

Els altres usuaris (ferran) tenen l'accés denegat (r--).

<img width="737" height="820" alt="2025-11-18_13-53" src="https://github.com/user-attachments/assets/fdc8745a-3194-4c85-95e1-bd5b73f92883" />


**ACL**

19. Prova de Permisos Tradicionals i ACL Bàsica

Què faig aquí? Primer, creo un parell d'elements per fer proves: un directori anomenat proves i un fitxer anomenat proves2.

Assigno permisos tradicionals:

Al directori proves, li poso 750 (chmod 750 proves). Això vol dir que el propietari (jo) té tot el control, el grup pot llegir i entrar (r-x), i els altres no tenen cap permís (---).

Miro les ACLs:

Executo getfacl al directori proves per comprovar si hi ha ACLs aplicades, i veig que de moment només hi ha els permisos tradicionals.

<img width="553" height="453" alt="2025-11-24_12-00" src="https://github.com/user-attachments/assets/db24f700-9949-48ca-8991-dfcd2373cb15" />

20. Assignació i Verificació d'ACL Específic

Què faig aquí? Vull donar accés d'escriptura a un usuari concret (roig) en un fitxer, sense canviar els permisos del grup o d'altres.

Aplico una ACL: Faig servir setfacl -m user:roig:rw- proves2. Amb això, li dono permisos de Lectura i Escriptura (rw-) a l'usuari roig només sobre el fitxer proves2.

Verifico l'ACL: Quan executo getfacl proves2, veig clarament que l'usuari roig apareix a la llista amb rw-, mentre que el grup i els altres usuaris continuen amb permisos restringits.

Provo l'accés (Usuaris blau i roig):

Intento entrar com a blau i modificar el fitxer, però fallo (ni tan sols tinc permisos de sudo).

Quan entro com a roig i executo nano /var/proves2, puc obrir el fitxer i començar a editar-lo.

<img width="443" height="182" alt="2025-11-24_12-02" src="https://github.com/user-attachments/assets/8c8a8d9d-fde5-4da2-a89b-6c2e61962458" />
<img width="582" height="194" alt="2025-11-24_12-05" src="https://github.com/user-attachments/assets/4d3b9f55-0dbb-4451-a83d-b1606069cbfd" />

21. Demostració de la Prioritat d'ACL

Què faig aquí? Aquesta és una prova avançada on demostro que les ACLs poden sobreescriure i denegar un permís que la configuració tradicional sí que permetria.

Crec un directori compartit obert: Crec el directori compartida i li poso els permisos més oberts possibles: 777 (rwxrwxrwx). En teoria, tothom hi hauria de poder entrar.

Aplico una ACL de denegació: Intencionadament, faig servir setfacl -m user:roig:--- compartida/ per treure TOTS els permisos a l'usuari roig sobre aquest directori.

Provo l'accés: Entro com a roig i intento entrar al directori (cd /compartida/).

<img width="685" height="582" alt="2025-11-24_12-13" src="https://github.com/user-attachments/assets/ac6d50a1-bf27-4dfa-bd3e-b51af9629891" />
<img width="592" height="336" alt="2025-11-24_12-24" src="https://github.com/user-attachments/assets/3f314763-7d3f-472d-8625-600c6e2bda77" />

22. Neteja d'ACL

Què faig aquí? Un cop feta la prova de l'ACL, vull deixar el fitxer com estava, sense cap llista de control d'accés especial.

Elimino l'ACL: Faig servir setfacl -b proves2. El paràmetre -b indica que esborri totes les ACLs del fitxer.

Verifico: Executo getfacl proves2 i confirmo que l'entrada d'usuari roig:rw- ja no hi és.

<img width="412" height="399" alt="2025-11-24_12-22" src="https://github.com/user-attachments/assets/824a4f15-4f06-4511-a6a7-46e8900e47fb" />

23. Configuració Local de la Màscara de Creació (umask)

Què faig aquí? Aquesta prova és per veure com la màscara de creació de fitxers afecta els permisos dels elements nous.

Canvio el umask: Canvio el valor de umask al terminal de 0002 a 0004.

Creeu elements nous: Després, creo un directori (mkdir proves) i un fitxer (touch proves2).

Llisto els permisos: Amb ls -l, miro quins permisos tenen els elements creats amb el nou umask.

<img width="535" height="221" alt="2025-11-25_13-18" src="https://github.com/user-attachments/assets/0fbc08fc-55bd-48d2-9865-43c30e8334b3" />

24. Configuració Global de la Màscara de Creació (/etc/login.defs)

Què faig aquí? Vull aplicar un umask concret a tots els usuaris del sistema per defecte.

Edito el fitxer global: Utilitzo nano per editar el fitxer /etc/login.defs.

Canvio el valor UMASK: He canviat el valor per defecte (022) a 033.

<img width="1040" height="477" alt="2025-11-25_13-20" src="https://github.com/user-attachments/assets/bf20e63e-2a37-4401-bb15-90a5f17f7a4c" />


---

##  4. Còpies de seguretat i automatització de tasques

1. Teoria Còpies de Seguretat
 Què és una còpia de seguretat?

 1.1 Tipus de còpies de seguretat
      |                | Què és                                                                 | Què necessiten                                      |
      |----------------|------------------------------------------------------------------------|-----------------------------------------------------|
      | **Completa**   | Còpia de seguretat de totes les dades                                 | Només la còpia completa                             |
      | **Diferencial**| Còpia de tots els canvis des de l’última còpia **completa**           | L’última còpia completa + la còpia diferencial      |
      | **Incremental**| Còpia només dels canvis des de l’última còpia (sigui completa o incr.)| L’última còpia completa + totes les incrementals    |

2. Teoria comandes Backups
   
    1. cp : còpia simple que no es intel·ligent, transfereix archius només localment i no optimitza ni temps ni espais
    2. rysnc : és una eina intel·ligent que només còpia els fitxers modificats, treballa en local i en remot
    3. dd : "no és una eina per a copiar", però quan volem copiar tot un disc/partició, s'utilitza per copiar
       
4. Pràctica comandes Backups
    1. cp 
    2. rysnc 
    3. dd 

5. Pràctica programes Backups
    1. Deja-Dup
    2. Duplicity
      
6. Teoria Automatització scripts, cron anacron

7. Pràctica automatització
    1. cron
    2. anacron
---

##  5. Quotes d'usuari
