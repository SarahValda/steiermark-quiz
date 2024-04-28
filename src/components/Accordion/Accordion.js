import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import './Accordion.css'

// Diese Komponente gibt ein Accordion aus, das verschiedene Informationen über die Steiermark zeigt.
function SteiermarkAccordion() {
    return (
        <div className="steiermark-accordion">
            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>💚 Allgemeines über die Steiermark</Accordion.Header>
                        <Accordion.Body>
                            Die Steiermark, oft als das "Grüne Herz Österreichs" bezeichnet, ist für ihre vielfältige Landschaft bekannt, die von dichten Wäldern und weitläufigen Weinbergen bis zu den schroffen Gebirgen der Alpen reicht. Die Region ist besonders berühmt für ihre hochwertigen landwirtschaftlichen Produkte, einschließlich des steirischen Kürbiskernöls, das unter einer geschützten Ursprungsbezeichnung verkauft wird. Interessant ist, dass die Steiermark mit über 35% bewaldeter Fläche eine der waldreichsten Regionen Österreichs ist.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>🎭 Kulturelle Highlights</Accordion.Header>
                        <Accordion.Body>
                            Kulturell bietet die Steiermark eine Vielzahl von Festivals und Veranstaltungen, die das ganze Jahr über stattfinden. Die historische Stadt Graz, die Landeshauptstadt, ist UNESCO-Weltkulturerbe und war die Europäische Kulturhauptstadt 2003. Ein bemerkenswertes Wahrzeichen ist die Grazer Uhrturm auf dem Schlossberg.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>👨🏼‍🎓 Bildung und Innovation</Accordion.Header>
                        <Accordion.Body>
                            Die Steiermark ist auch ein Zentrum für Bildung und Forschung, mit mehreren renommierten Universitäten und Forschungseinrichtungen, die sich auf verschiedene wissenschaftliche Disziplinen spezialisieren. Die Technische Universität Graz und die Karl-Franzens-Universität sind beispielsweise führend in den Bereichen Technik und Geisteswissenschaften. Die Region ist auch bekannt für ihre Innovationskraft in den Bereichen grüne Technologien und nachhaltige Entwicklung.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>📈 Wirtschaftliche Bedeutung</Accordion.Header>
                        <Accordion.Body>
                            Die Steiermark spielt eine zentrale Rolle in der österreichischen Wirtschaft, insbesondere durch ihre Beiträge zur Automobilindustrie und zum Maschinenbau. Viele internationale Unternehmen haben hier ihre Produktionsstätten. Zudem trägt der Tourismus wesentlich zur lokalen Wirtschaft bei, angezogen durch die natürliche Schönheit und Vielfältigkeit der Region, ihre heilenden Thermalquellen und die hervorragende steirische Küche.
                        </Accordion.Body>
                    </Accordion.Item>
                </Card>
            </Accordion>
        </div>
    );
}

export default SteiermarkAccordion;