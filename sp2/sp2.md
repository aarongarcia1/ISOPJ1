# 🌀  Sprint 2: Instal·lació · Configuració de Programari de Base · Gestió de Fitxers

<h3>Índex</h3>

<ol>
  <li><strong>Sistemes de fitxers i particions</strong></li>
  <ul>
    <li><strong>Mida sector:</strong> és la unitat mínima física on es guarden les dades en un disc. Per defecte, la mida del sector és de <strong>512 bytes</strong> i no es pot modificar.</li>
    <li><strong>Mida bloc o clúster:</strong> és la unitat mínima lògica on es guarden les dades a nivell de sistema operatiu. Per defecte, la mida és de <strong>4096 bytes (8 sectors)</strong> i es pot modificar en formatar la partició. Cada partició pot tenir una mida de bloc i un sistema de fitxers diferent.</li>
    <li><strong>Fragmentació interna:</strong> es produeix quan els blocs són massa grans per al que es vol guardar, desaprofitant espai al disc.</li>
    <li><strong>Fragmentació externa:</strong> passa quan un arxiu no està guardat en blocs consecutius de la memòria, fent els accessos més lents i reduint el rendiment.</li>
    <li><strong>Sistemes de fitxers:</strong>
      <ul>
        <li><strong>Windows:</strong> NTFS, FAT32</li>
        <li><strong>Ubuntu:</strong> ext4</li>
      </ul>
    </li>
    <li><strong>Tipus de formatatge:</strong>
      <ul>
        <li><strong>Baix nivell:</strong> esborra arxius i sistema de fitxers, intenta reparar sectors defectuosos però requereix programes específics (no es pot fer des del SO).</li>
        <li><strong>Mig nivell:</strong> igual que l’alt nivell però pot marcar sectors defectuosos.</li>
        <li><strong>Alt nivell:</strong> no esborra els arxius, només el sistema de fitxers; si troba sectors defectuosos, els ignora.</li>
      </ul>
    </li>
    <li><strong>Partició:</strong> una partició és un tros físic del disc dur. Amb <strong>GParted</strong> podem gestionar particions però <u>no modificar la mida de bloc</u>.</li>
    <li><strong>Volum:</strong> és una capa d’abstracció que se situa damunt de les particions i/o discos.</li>
    <li><strong>Gestió de particions:</strong>
      <ul>
        <li><strong>Eina gràfica:</strong> GParted</li>
        <li><strong>Comandes:</strong> (altres eines de línia d’ordres)</li>
      </ul>
    </li>
  </ul>

  <li><strong>Gestió de processos</strong></li>
  <li><strong>Gestió d’usuaris, grups i permisos</strong></li>
  <li><strong>Còpies de seguretat i automatització de tasques</strong></li>
  <li><strong>Quotes d’usuari</strong></li>
</ol>

