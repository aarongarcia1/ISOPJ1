#  🌀 Sprint 2: Instal·lació · Configuració de Programari de Base · Gestió de Fitxers


# Índex

## 1. Sistemes de fitxers i particions
- **Mida sector:** és la unitat mínima física on es guarden les dades en un disc. Per defecte, la mida del sector és de **512 bytes** i **no es pot modificar**.
- **Mida block o clúster:** és la unitat mínima lògica on es guarden les dades a nivell de sistema operatiu. Per defecte, la mida és de **4096 bytes (8 sectors)** i **es pot modificar** en formatar la partició. Cada partició pot tenir una mida de bloc i un sistema de fitxers diferent.
- **Fragmentació interna:** es produeix quan els blocs són massa grans per al que es vol guardar, desaprofitant espai al disc.
- **Fragmentació externa:** passa quan un arxiu no està guardat en blocs consecutius de la memòria, fent els accessos més lents i reduint el rendiment.
- **Sistemes de fitxers:**
  - **Windows:** NTFS, FAT32  
  - **Ubuntu:** ext4
- **Tipus de formateig:**
  - **Baix nivell:** esborra arxius i sistema de fitxers, intenta reparar sectors defectuosos però requereix programes específics (no es pot fer des del SO).
  - **Mig nivell:** igual que el d’alt nivell però pot marcar sectors defectuosos.
  - **Alt nivell:** no esborra els arxius, només el sistema de fitxers; si troba sectors defectuosos, els ignora.
- **Partició:** una partició és un tros físic del disc dur. Amb **GParted** podem gestionar particions però **no modificar la mida de bloc**.
- **Volum:** és una capa d’abstracció que se situa damunt de les particions i/o discos.
- **Gestió de particions:**
  - **Eina gràfica:** GParted
  - **Comandes:** (altres eines de línia d’ordres)

## 2. Gestió de processos

## 3. Gestió d’usuaris, grups i permisos

## 4. Còpies de seguretat i automatització de tasques

## 5. Quotes d’usuari
