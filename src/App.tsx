import ReactPDF, { Document, Page, StyleSheet } from "@react-pdf/renderer";
import PDFViewer = ReactPDF.PDFViewer;
import Header from "./sections/header.tsx";

// Create styles
const styles = StyleSheet.create({
  preview: {
    width: "100vw",
    height: "100vh",
  },
  page: {
    flexDirection: "column",
  },
});

function App() {
  return (
    <PDFViewer style={styles.preview}>
      <Document
        title="CV"
        author="Ivan Avdeyev"
        subject="CV"
        creator="Avdeyev Ivan"
        keywords="react, frontend, developer, next.js, cv, resume"
        language="en"
      >
        <Page size="A4" style={styles.page}>
          <Header />
        </Page>
      </Document>
    </PDFViewer>
  );
}

export default App;
