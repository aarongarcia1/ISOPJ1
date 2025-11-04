# 🌀  Sprint 2: Instal·lació · Configuració de Programari de Base · Gestió de Fitxers

# 1. Sistemes de fitxers i particions

- **Mida sector:**  
  És la unitat mínima física on es guarden les dades en un disc.  
  Per defecte, la mida del sector és de **512 bytes** i **no es pot modificar**.

- **Mida block o clúster:**  
  És la unitat mínima lògica on es guarden les dades a nivell de sistema operatiu.  
  Per defecte, la mida és de **4096 bytes (8 sectors)** i **sí que es pot modificar** quan es formateja la partició.  
  Cada partició del disc pot tenir una mida de bloc i un sistema de fitxers diferent.

- **Fragmentació interna:**  
  Es produeix quan els blocs són massa grans per al que es vol guardar i s’acaba desaprofitant espai al disc.

- **Fragmentació externa:**  
  Es produeix quan un fitxer no està guardat en blocs consecutius de la memòria.  
  Això provoca que els accessos siguin més lents i, per tant, baixa el rendiment.

- **Sistemes de fitxers:**  
  N’hi ha de molts tipus, cadascun optimitzat per a diferents usos, i cada sistema té unes limitacions.

  - **Windows:** NTFS, FAT32  
  - **Ubuntu:** ext4

- **Tipus de formateig:**
  - **Baix nivell:** Esborra arxius i el sistema de fitxers. Intenta reparar sectors defectuosos, però requereix programes específics i **no es pot fer mitjançant el SO**.  
  - **Mig nivell:** Igual que el d’alt nivell però **marca els sectors defectuosos** si n’hi ha.  
  - **Alt nivell:** No esborra els arxius, només el sistema de fitxers. Si troba sectors defectuosos, **els ignora**.

- **Partició:**  
  Una partició és un tros físic del disc dur.  
  Amb **GPARTED** podem gestionar particions, però **no podem modificar la mida de bloc**.

- **Volum:**  
  És una capa d’abstracció que es posa damunt de les particions i/o discos.

- **Gestió de particions:**
  - **Eina gràfica:** GPARTED  
  - **Comandes:** eines CLI per gestionar particions

---

# 2. Gestió de processos

---

# 3. Gestió d'usuaris i grups i permisos

---

# 4. Còpies de seguretat i automatització de tasques

---

# 5. Quotes d'usuari
