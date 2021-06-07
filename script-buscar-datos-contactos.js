var system = java.lang.System;
if (statusCode != 200) {
    var mensagemErroServico = "Error tecnico: "  + urlServicioBuscarDatosContacto 
    + " código do error " + statusCode;
    system.out.println(mensagemErroServico);
    connector.setVariable("mensagemErroServico", mensagemErroServico);
    throw new org.camunda.bpm.engine.delegate.BpmnError("error-no-responde-datos");
}
else {
    system.out.println("Acceso exitoso: " + urlServicioBuscarDatosContacto);
    connector.setVariable("nombre", S(response).prop("name").value());
    connector.setVariable("correo", S(response).prop("email").value());
    connector.setVariable("puntaje", S(response).prop("scoring").value());
}
statusCode;