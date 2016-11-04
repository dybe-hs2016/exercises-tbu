<?
	$dirname='autothumb';
	$dirOK=true;
	if(!file_exists($dirname))
	{
		mkdir($dirname);
	}
	else
	{
		if(!is_dir($dirname))
		{
			die ("Can't create dir (exists as a file)");
		}
	}
?>