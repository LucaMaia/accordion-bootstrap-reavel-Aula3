import Accordion from 'react-bootstrap/Accordion';
import {Zoom,Flip,Rotate} from 'react-reveal';

export default function AccordionComponent({link}) {
    return (
        <Accordion defaultActiveKey="0">
            {link.map((item, index) => {
                return (
                    <div key={index}>
                        <Rotate>
                            <Accordion.Item eventKey={item.numeric}>
                                <Accordion.Header>{item.title}</Accordion.Header>
                                <Accordion.Body>
                                    {item.description}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Rotate>

                    </div>

                )
            })}

        </Accordion>
    );
}

