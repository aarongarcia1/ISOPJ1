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


---

##  3. Gestió d'usuaris i grups i permisos

---

##  4. Còpies de seguretat i automatització de tasques

---

##  5. Quotes d'usuari
