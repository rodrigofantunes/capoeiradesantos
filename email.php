<?
$your_email = "ecasacapoeira@gmail.com";

$headers= "From: ".$_POST['nome']." <".$_POST['email'].">\r\n";
$headers.='Content-type: text/html; charset=utf-8';
mail($your_email, $_POST['assunto']." - Site ECASA",  "

	Contato - Site ECASA<br>
	Nome : ".$_POST['nome']."<br>
	Email : ".$_POST['email']."<br>
	Assunto : ".$_POST['assunto']."<br>
	Mensagem : ".$_POST['mensagem']."<br>

" , $headers);
echo "<script>alert('Mensagem eviada com sucesso!');
		location.href='index.html';
 	  </script>"
?>