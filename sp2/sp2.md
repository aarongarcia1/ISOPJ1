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
 /etc/passwd
 
 /etc/group

 /etc/shadow 
---

##  3. Gestió d'usuaris i grups i permisos

---

##  4. Còpies de seguretat i automatització de tasques

---

##  5. Quotes d'usuari
