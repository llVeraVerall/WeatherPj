import React from "react";
import styles from '../../styles.module.scss';

export const Form = () => {
	return(
		<div className={styles.form}>
		<form>
			<input type='text' name='city' placeholder='Город' className={styles.input}/>
			<button className={styles.button}>Узнать погоду</button>
		</form>
		</div>
	)
};